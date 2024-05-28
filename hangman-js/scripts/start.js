let categories = ['фильмы', 'животные', 'сказки'];

    let words = {
        'фильмы': ['код лиоко', 'царевны', 'неисправимый рон', 'в гости к робинсонам'],
        'животные': ['утка', 'медведь', 'лиса', 'волк', 'свин'],
        'сказки': ['курочка ряба', 'волк и семеро козялт'],
    }

let category = '';
let word = '';

let wordLen = 0;
let worldUncineLettersNumber = 0;
let attemptsNumber = 10;
let successfulAttemptCount = 0;

let categoryNameSelector = document.querySelector('.category-name');
let wordSelector = document.querySelector('.word');
let atteptsNumbersSelector = document.querySelector('.attepts-numbers');
let attemptsSelector = document.querySelector('.attempts');
let worldLetters;

let letters = document.querySelectorAll('.letter');
//console.log(letters);


start();

function start() {
    category = choose(categories);
    word = choose(words[category]);

    categoryNameSelector.innerText = category;
    console.log(word);

    wordLen = word.length;
    //worldLenWithoutWhitespaces = word.split(' ').join('').length;
    worldUncineLettersNumber = countUncineLetters(word);
    console.log(`worldUncineLettersNumber=${worldUncineLettersNumber}`);

    for (let i = 0; i < wordLen; i++) {
        wordSelector.innerHTML += `<span class="word-letter">?</span>`;
    }
    worldLetters = document.querySelectorAll('.word-letter');
}