function joinArray() {
    // Get the array and separator from the input fields
    const arrayInput = document.getElementById('arrayInput').value;
    const separator = document.getElementById('separatorInput').value;
    
    // Convert the string of array elements into an actual array
    const array = arrayInput.split(',');

    // Join the array elements using the provided separator
    const result = array.join(separator);
    
    // Display the result
    document.getElementById('result').innerText = result;
}
function clearForm() {
    document.getElementById('arrayInput').value = '';
    document.getElementById('separatorInput').value = '';
    document.getElementById('result').innerText = '';
} 