let num1 = "x";
let num2 = "x";
let operator = "x";
let displayNum = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")




function pushToDisplay(input, reset) {
    if (reset === true) {
        display.textContent = "";
    }
    display.textContent += input;
}

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
    if (num2 === 0) {
        return "error";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case add: return add(num1, num2);
        case subtract: return subtract(num1, num2);
        case multiply: return multiply(num1, num2);
        case divide: return divide(num1, num2);
    }
}

// adds event listeners to Every number (except 0 lol)
for (let number of numbers) {
    number.addEventListener("click", () => {
        let numberName = Array.from(number.className)[0];
        console.log(numberName);
        pushToDisplay(numberName, false);
    })
}
