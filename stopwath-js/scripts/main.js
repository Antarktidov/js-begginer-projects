let stopwathSelector = document.querySelector('.stopwath');
let startButton = document.querySelector('.satrt');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');

startButton.onclick = function () {
    let intervaleditCount = setInterval(editcountcalc, 10);
    startButton = null;

    function editcountcalc(){
        //console.log(stopwathSelector.innerText);
        let stopwath = stopwathSelector.innerText.split(':').join('');
        let numStopwath = +stopwath;
        numStopwath++;
        stopwath = numToString(numStopwath.toString());//вот тут проблема

        //console.log(stopwath);

        stopwathSelector.innerText = stopwath.slice(0, 2) + ':' + stopwath.slice(-2);

        stopButton.onclick = function() {
            startButton = document.querySelector('.satrt');
            clearInterval(intervaleditCount);
        }

        resetButton.onclick = function() {
            startButton = document.querySelector('.satrt');
            stopwathSelector.innerText = '00:00';
            clearInterval(intervaleditCount);
            //stopwathSelector.innerText = '00:00';
        }
    }

    
}