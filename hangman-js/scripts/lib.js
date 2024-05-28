function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function countUncineLetters(word) {
    let count = 0;

    for (let i = 0; i < wordLen; i++) {
        for (let j = 0; j < wordLen; j++) {
            if (i !== j && word[i] !== ' ' && word[j] !== ' '
                && word[i] !== word[j]
            ) {
                count++;
            }
        }
    }

    return count;
}