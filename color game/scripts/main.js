for (let i = 0; i < palette.length; i++) {
    palette[i].onclick = function() {
        if (colors[i] === trueColor2) {
            colorSubOutput.innerText = 'Вы выиграли!';

            for (let j = 0; j < palette.length; j++) {
                palette[j].style.backgroundColor = `rgb${trueColor2}`;
            }
        } else {
            palette[i].style.backgroundColor = 'transparent';
        }
    }
}