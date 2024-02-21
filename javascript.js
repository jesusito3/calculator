let num1 = "";
let num2 = "";
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
        return add(num1, num2);
    }
    else if(operator === "-") {
        return subtract(num1, num2);
    }
    else if(operator === "*") {
        return multiply(num1, num2);
    }
    else if(operator === "/") {
        return divide(num1, num2);
    }
}

const display = document.querySelector('.display');


document.addEventListener('click', function(event) {
    if(display.textContent === "0") {
        display.textContent = "";
    }
    switch(event.target.className) {
        case '0':
            display.textContent += "0";
            break;
        case '1':
            display.textContent += "1";
            break;
        case '2':
            display.textContent += "2";
            break;
        case '3':
            display.textContent += "3";
            break;
        case '4':
            display.textContent += "4";
            break;  
        case '5':
            display.textContent += "5";
            break;
        case '6':
            display.textContent += "6";
            break;
        case '7':
            display.textContent += "7";
            break;
        case '8':
            display.textContent += "8";
            break;
        case '9':
            display.textContent += "9";
            break;
        case 'add':
            num1 = display.textContent;
            operator = "+";
            display.textContent = "";
            break;
        case 'subtract':
            num1 = display.textContent;
            operator = "-";
            display.textContent = "";
            break;
        case 'multiply':
            num1 = display.textContent;
            operator = "*";
            display.textContent = "";
            break;
        case 'divide':
            num1 = display.textContent;
            operator = "/";
            display.textContent = "";
            break;
        case 'equals':
            num2 = display.textContent;
            display.textContent = operate(operator, +num1, +num2);
            break;
        case 'clear':
            display.textContent = "0";
        default:
            break;

    }
});