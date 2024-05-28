let displayNumber = document.querySelector('.display-number');
let equally = document.querySelector('.equally');
let backspace = document.querySelector('.backspace');

let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation');


let num1 = 0;
let num2 = 0;
let result = 0;

let string = '';
let operation = '';


for (let i = 0; i < 11; i++) {
    numbers[i].onclick = function() {
        string += numbers[i].innerText;

        //console.log(string);
        displayNumber.innerText = string;
  };
}

backspace.onclick = function() {
    string = string.slice(0, string.length-1);
    displayNumber.innerText = string === '' ? 0 : string;
}

for (let i = 0; i < 4; i++) {
    operations[i].onclick = function() {
        if (operation === '')
            num1 = +string;
        else
            num2 = +string;

        string = '';
        operation = operations[i].innerText;
    }
}


equally.onclick = function() {
    num2 = +string;
    string = '';
    console.log(operation);

    switch(operation) {
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
          break;
        case '-':
            result = num1 - num2;
            break;
        case '+':
            result = num1 + num2;
            break;

        default:
          console.error(`Ошибка! operation=${operation}`)
          break;
      }

    displayNumber.innerText = result;
    num1 = result;
}