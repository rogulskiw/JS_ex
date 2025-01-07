const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
     params: {
        apikey:  'b510411d',
        s: searchTerm
        }   
    }); 

    if(response.data.Error) {
        return [];
    }

    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = debounce(async event => { //Debouncing an input
    const movies = await fetchData(event.target.value);

    for(let movie of movies){
        const div = document.createElement('div');

        div.innerHTML = `
            <img src="${movie.Poster}" />
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div)
    }
}, 500);
    
input.addEventListener('input', onInput)
//Debounce could be also implented this way
// const onInput = event => { //Debouncing an input
//     fetchData(event.target.value)
// };
    
// input.addEventListener('input', debounce(onInput, 500))

