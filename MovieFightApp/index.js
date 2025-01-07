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
const root = document.querySelector('.autocomplete')
root.innerHTML = `
    <label><b>Search For a Movie</b></label>
    <input class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>
`;
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

const onInput = debounce(async event => { //Debouncing an input
    const movies = await fetchData(event.target.value);

    resultsWrapper.innerHTML = '';
    dropdown.classList.add('is-active');
    for(let movie of movies){
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

        option.classList.add('dropdown-item')
        option.innerHTML = `
            <img src="${imgSrc}" />
            ${movie.Title}
        `;

        resultsWrapper.appendChild(option)
    }
}, 500);
    
input.addEventListener('input', onInput)

//Debounce could be also implented this way
// const onInput = event => { //Debouncing an input
//     fetchData(event.target.value)
// };
    
// input.addEventListener('input', debounce(onInput, 500))

document.addEventListener('click', event => {
    if(!root.contains(event.target)){
        dropdown.classList.remove('is-active');
    }
})