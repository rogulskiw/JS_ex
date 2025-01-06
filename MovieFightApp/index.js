const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
     params: {
        apikey:  'b510411d',
        s: searchTerm
        }   
    }); 

    console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};

const onInput = debounce(event => { //Debouncing an input
    fetchData(event.target.value)
}, 500);
    
input.addEventListener('input', onInput)
//Debounce could be also implented this way
// const onInput = event => { //Debouncing an input
//     fetchData(event.target.value)
// };
    
// input.addEventListener('input', debounce(onInput, 500))