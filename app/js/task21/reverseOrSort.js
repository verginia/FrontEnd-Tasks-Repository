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