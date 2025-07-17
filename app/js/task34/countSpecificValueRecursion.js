function countValueInArray(arr, value, index = 0, count = 0) {
    if (index >= arr.length) {
        return count;
    }
    if (arr[index] == value) {
        count++;
    }
    return countValueInArray(arr, value, index + 1, count);
}

function countValue() {
    const arrayInput = document.getElementById('arrayInput').value.split(',');
    const valueInput = document.getElementById('valueInput').value;
    const result = countValueInArray(arrayInput, valueInput);
    document.getElementById('result').innerText = `The value "${valueInput}" appears ${result} times in the array.`;
}