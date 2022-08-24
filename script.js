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

//Add numbers to the display with buttons
numberButtons = document.querySelectorAll('.num-input');
numberButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        operationsDisplay.textContent += e.target.dataset.value       
    })

});


//Add numbers to the display with key presses
window.addEventListener('keydown', (e) => {
    numberRegex = /[0-9]/
    if (numberRegex.test(e.key)) {
        operationsDisplay.textContent += e.key

    }else if (e.key === '.') {
        // Check if there is a period already 
        if(!operationsDisplay.textContent.includes('.')){
            operationsDisplay.textContent += e.key
        }
    }

})

// Remove last input with 'DEL' button
delButton = document.querySelector('#del-button');
delButton.addEventListener('click', (e) => {
    operationsDisplay.textContent = operationsDisplay.textContent.slice(0, -1)
})

// Clear display with 'AC' button
acButton = document.querySelector('#ac-button');
acButton.addEventListener('click', (e) => {
    operationsDisplay.textContent = '';
    resultDisplay.textContent = '';
})





