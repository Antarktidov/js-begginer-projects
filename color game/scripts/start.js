let palette = document.querySelectorAll('.color');
let colorSubOutput = document.querySelector('.color-sub-output');

let trueIndex = Math.round( Math.random() * (palette.length-1));

let trueColor = '';
let trueColor2 = '';
let colors = [];

for (let i = 0; i < palette.length; i++) {
    let r = random();
    let g = random();
    let b = random();

    let rgb = `(${r}, ${g}, ${b})`;
    colors.push(rgb);

    if (i === trueIndex){
        trueColor = `RGB ${rgb}`;
        trueColor2 = rgb;
    }
    palette[i].style.backgroundColor = `rgb${rgb}`;
}

colorSubOutput.innerText = trueColor;

function random() {
    return Math.round( Math.random() * 256);
}