
inputDisplay = document.querySelector('.display-operations');
resultDisplay = document.querySelector('.display-result');

//Add numbers to the display with buttons
numberButtons = document.querySelectorAll('.num-input');
numberButtons.forEach(element => {
    element.addEventListener('click', (e) => {
        inputDisplay.textContent += e.target.dataset.value    ;   
    })

});

let currentResultValue;
let currentOperator;

window.addEventListener('keydown', (e) => {
    numberRegex = /[0-9]/;
    
    // Add numbers to the display with key presses
    if (numberRegex.test(e.key)) {
        
        inputDisplay.textContent += e.key;
    
    // Add decimal point
    }else if (e.key === '.') {
        // Check if there is a period already 
        if(!inputDisplay.textContent.includes('.')){
            inputDisplay.textContent += e.key;
        }

    // Add operators
    }else if (e.key === '+') {
        currentOperator = '+';
        addOperator(currentOperator);

    }else if (e.key === '-') {
        currentOperator = '-';
        addOperator(currentOperator);

    }else if (e.key === '/') {
        currentOperator = '/';
        addOperator(currentOperator);

    }else if (e.key === '*') {
        currentOperator = '*';
        addOperator(currentOperator);

    }else if (e.key === '^') {
        currentOperator = '^';
        addOperator(currentOperator);
        
    }else if (e.key === 'Enter') {
        performOperation();
    }

})


function addOperator(operator){
    
    if(!currentResultValue) {
        currentResultValue = Number(inputDisplay.textContent);
        resultDisplay.textContent = currentResultValue;
        inputDisplay.textContent = `${operator}`;

    // Place an operator at the begining of the input if there is none
    }else if(numberRegex.test(inputDisplay.textContent.charAt(0))) {
        inputDisplay.textContent = `${operator}${inputDisplay.textContent}`;
    
    // If there is an operator, perform the operation
    } else {
        performOperation();
        inputDisplay.textContent = `${operator}`;
    }

    currentOperator = operator;

}

// 

function performOperation() {

    // Prevent operations with an empty input
    if (!inputDisplay.textContent.substr(1)){
        return;
    }
    inputValue = Number(inputDisplay.textContent.substr(1))
    
    switch(currentOperator){
        case '+':
            currentResultValue = currentResultValue + inputValue;
            break;

        case '-':
            currentResultValue = currentResultValue - inputValue;
            break;

        case '/':
            currentResultValue = currentResultValue / inputValue;
            break;

        case '*':
            currentResultValue = currentResultValue * inputValue;
            break;
    
        case '^':
            currentResultValue = currentResultValue ** inputValue;
            break;

        // If no operator is selected, just display input in the result display
        default:
            if(inputDisplay.textContent != '') {
                currentResultValue = Number(inputDisplay.textContent);

            }
        
    }

    resultDisplay.textContent = currentResultValue;
    inputDisplay.textContent = '';
    currentOperator = '';
    
}


// Remove last input with 'DEL' button
delButton = document.querySelector('#del-button');
delButton.addEventListener('click', (e) => {
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
})

// Clear everything with 'AC' button
acButton = document.querySelector('#ac-button');
acButton.addEventListener('click', (e) => {
    inputDisplay.textContent = '';
    resultDisplay.textContent = '';
    resultDisplay.textContent = '';
    currentResultValue = '';
    inputDisplay.textContent = '';
    currentOperator = '';
})










