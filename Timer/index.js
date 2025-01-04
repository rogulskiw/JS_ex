

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const parameter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', parameter);


let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    }, 
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
            parameter * timeRemaining / duration - parameter
        );
    }, 
    onComplete(){
          console.log('Timer is completed')
    }
});

