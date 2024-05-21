function findMinMax() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);

    if (numbers.length === 0 || numbers.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter a valid list of numbers.';
        return;
    }
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    document.getElementById('result').innerText = `Minimum: ${min},  Maximum: ${max}`;
}

function clearForm() {
    document.getElementById('numbersInput').value = '';
    document.getElementById('result').innerText = '';
} 