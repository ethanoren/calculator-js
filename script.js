let num1 = null;
let num2 = null;
let operator = null;
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const mathbuttons = document.querySelectorAll(".mathbuttons");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");
const ac = document.querySelector(".ac")
let override = false;




function pushToDisplay(input, reset) {
    if (reset === true) {
        display.textContent = "";
    }
    if (input.length > 9) {
        display.textContent += input.substring(0, 9);
    }
    else {
        display.textContent += input;
    }
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
        return "jfdksfkdsfksdjf";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "add": return add(num1, num2);
        case "subtract": return subtract(num1, num2);
        case "multiply": return multiply(num1, num2);
        case "divide": return divide(num1, num2);
    }
}

// adds event listeners to Every number (except 0 lol)
for (let number of numbers) {
    number.addEventListener("click", () => {
        let numberName = Array.from(number.className)[0];
        console.log(numberName);
        if (override === true) {
            pushToDisplay("", true);
            override = false;
        }
        pushToDisplay(numberName, false);
    })
}

zero.addEventListener("click", () => {
    pushToDisplay(0, false);
})

for (let mathbutton of mathbuttons) {
    mathbutton.addEventListener("click", () => {
        let operatorName = Array.from(mathbutton.classList)[0];
        if (num1 === null && num2 === null) {
            num1 = parseInt(display.textContent);
            operator = operatorName;
            pushToDisplay("", true);
        }
        else if (num2 === null) {
            num2 = parseInt(display.textContent);
            operator = operatorName;
            pushToDisplay("", true);
            pushToDisplay(operate(num1, num2, operator), false);
            num1 = parseInt(display.textContent); num2 = null; operator = "";
            override = true;
        }
    })
}

equals.addEventListener("click", () => {
    if (num1 === null || operator === "") {
        return;
    }
    else {
        console.log(parseInt(display.textContent));
        if (isNaN(parseInt(display.textContent)) === true) {
            pushToDisplay(num1, false);
            num1 = null; num2 = null; operator = "";
        }
        else {
            num2 = parseInt(display.textContent);
            pushToDisplay("", true);
            pushToDisplay(operate(num1, num2, operator), false);
            num1 = null; num2 = null; operator = "";
        }
    }
})



ac.addEventListener("click", () => {
    num1 = null; num2 = null; operator = "";
    pushToDisplay("", true);
})