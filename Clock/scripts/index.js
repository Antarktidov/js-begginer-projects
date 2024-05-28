let intervaleditCount = setInterval(editcountcalc, 1000)

function editcountcalc(){
    let date = new Date ();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12)
        hours -= 12;
    if (hours === 0)
        hours = 12;

    minutes = Math.trunc( minutes / 5 );
    seconds = Math.trunc( seconds / 5 );

    if (minutes === 0)
        minutes = 12;
    if (seconds === 0)
        seconds = 12;

    let hoursSelector = document.querySelector(`.h${hours}`);
    let minSecetor = document.querySelector(`.h${minutes}`);
    let secSelector = document.querySelector(`.h${seconds}`);
    let allNumbersSelector = document.querySelectorAll('span');

    for (let i = 0; i < allNumbersSelector.length; i++)
        color(allNumbersSelector[i], "var(--color)");

    color(hoursSelector, "var(--blue)");
    color(minSecetor, "var(--red)");
    color(secSelector, "var(--green)");

    //clearInterval(intervaleditCount);

}

function color(seelctor, color) {
    seelctor.style.color = color;
}