let num1 = 0;
let num2 = 0;
let operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if(operator === "+") {
        add(num1, num2);
    }
    else if(operator === "-") {
        subtract(num1, num2);
    }
    else if(operator === "*") {
        multiply(num1, num2);
    }
    else if(operator === "/") {
        divide(num1, num2);
    }
}

const display = document.querySelector('.display');

document.addEventListener('click', function(event) {
    switch(event.target.className) {
        case '0':
            display.textContent = "0";
            break;
        case '1':
            display.textContent = "1";
            break;
        case '2':
            display.textContent = "2";
            break;
        case '3':
            display.textContent = "3";
            break;
        case '4':
            display.textContent = "4";
            break;  
        case '5':
            display.textContent = "5";
            break;
        case '6':
            display.textContent = "6";
            break;
        case '7':
            display.textContent = "7";
            break;
        case '8':
            display.textContent = "8";
            break;
        case '9':
            display.textContent = "9";
            break;  
        default:
            break;

    }
});