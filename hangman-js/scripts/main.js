for (let i = 0; i < 33; i++) {
    letters[i].onclick = function() {
        let isTrueLetter = false;

        let letter = letters[i].innerText.toLowerCase();
        //console.log(letter);

        for (let j = 0; j < wordLen; j++) {
            //console.log(word);
            if (letter === word[j]) {
                worldLetters[j].innerText = letter;
                console.log(letter);
                isTrueLetter = !isTrueLetter;
            }
        }

        if (!isTrueLetter) {
            attemptsNumber--;
            atteptsNumbersSelector.innerText = attemptsNumber.toString();
        } else {
            successfulAttemptCount++;
        }

        console.log(`attemptsNumber=${attemptsNumber}`);
        console.log(`successfulAttemptCount=${successfulAttemptCount}`);

        if (attemptsNumber === 0) {
            attemptsSelector.innerText = 'Вы проиграли';
        }

        if (worldUncineLettersNumber === successfulAttemptCount) {
            attemptsSelector.innerText = 'Вы выиграли';
        }
    }
}

