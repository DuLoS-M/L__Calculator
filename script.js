function sum(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return a**b;
}

operationsDisplay = document.querySelector('.display-operations');
resultDisplay = document.querySelector('.display-result');

numberButtons = document.querySelectorAll('.num-input');
numberButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        operationsDisplay.textContent += e.target.dataset.value       
    })

});


