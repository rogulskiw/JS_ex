const boxes = document.querySelector('#boxes')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet']
const title = document.querySelector('h1')

colors.forEach(function(color,idx) {
    const newDiv = document.createElement('div')
    boxes.appendChild(newDiv);
    newDiv.style.backgroundColor = color;
    newDiv.classList.add('box')
    newDiv.addEventListener('click', function(){
        title.style.color = color;
    })

})


