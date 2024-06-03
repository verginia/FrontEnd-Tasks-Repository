function sortObjectsArray(arr, prop) {
    return arr.sort((a, b) => {
        if (a[prop] < b[prop]) return -1;
        if (a[prop] > b[prop]) return 1;
        return 0;
    });
}

const dataArray = [
    { name: 'Alice', age: 25, marks: 9.90 },
    { name: 'Bob', age: 30, marks: 9.94 },
    { name: 'Charlie', age: 20, marks: 9.93 },
    { name: 'Artur', age: 38, marks: 9.95 },
    { name: 'Verginia', age: 36, marks: 9.89 },
    { name: 'Ecaterina', age: 63, marks: 9.97 }
];

document.getElementById('sortButton').addEventListener('click', function() {
    const property = document.getElementById('property').value;
    const sortedArray = sortObjectsArray(dataArray, property);
    document.getElementById('output').textContent = JSON.stringify(sortedArray, null, 2);
});