let display = document.getElementById("displayCurrentOp");
let displayPrev = document.getElementById("displayPrevOp");


let number1 = "";
let number2 = "";
let operator = "";

function appendNumber(value) {
    if (operator == "") {
        number1 += value;
        display.value = number1;
    } else {
        number2 += value;
        display.value = number2;
    }
    }

function appendOperatorDecimal(value) {
    if (operator == "") {
        if (number1.includes(".") && value == ".") {
            return;
        }
        number1 += value;
        display.value = number1;
    } else {
        if (number2.includes(".") && value == ".") {
            return;
        }
        number2 += value;
        display.value = number2;
    }
}



function appendOperator(value) {
    if (number1 != "") {
        operator = value;
        display.value = operator;
    }
}

function clearDisplay() {
    number1 = "";
    number2 = "";
    operator = "";
    display.value = "";
    displayPrev.value = "";
}

function deleteLast() {
    if (operator == "") {
        number1 = number1.slice(0, -1);
        display.value = number1;
    } else {
        number2 = number2.slice(0, -1);
        display.value = number2;
    }
}

function calculate() {
    if (number2 != "") {
        let result = operate(operator, number1, number2);
        displayPrev.value = number1 + operator + number2;
        display.value = result;
        number1 = result;
        number2 = "";
        operator = "";
    }
}

function operate(operator, number1, number2) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch (operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}


