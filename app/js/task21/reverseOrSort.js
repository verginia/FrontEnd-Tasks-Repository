function processInput() {
    const inputValue = document.getElementById('inputValue').value;

    let result;
    // Check if the input is a number
    if (!isNaN(inputValue)) {
        // Input is a number, reverse it
        result = reverseNumber(inputValue);
    } else {
        // Input is a string, sort it alphabetically
        result = sortStringAlphabetically(inputValue);
    }
    // Display the result
    document.getElementById('result').innerText = result;
}

function reverseNumber(number) {
    return number.split('').reverse().join('');
}

function sortStringAlphabetically(string) {
    return string.split('').sort().join('');
}

function clearForm() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerText = '';
} 

/*
 another solution:

 function processInput(input){
    if(typeof input === 'number'){
        // Convert number to string, split into array, join back to string, convert back to number
        return parseInt(input.toString().split('').reverse().join(''));
    } else if (typeof input === 'string'){
        // Split string into array of characters, sort the array, join back to string
        return input.split('').sort().join('');
    } else{
        // If input is neigher a number nor a string, return a message or handle as needed
        return 'Invalid input type';
    }
 }
 */