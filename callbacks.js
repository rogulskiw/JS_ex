function fetchData(callback) {
    setTimeout(function() {
        const data = "Witaj, swiecie";
        callback(data);
    }, 2000);
}
fetchData((response) => {
    console.log(response);
});
