const exampleObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

function searchKeyInObject(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    }
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            let result = searchKeyInObject(obj[k], key);
            if (result !== undefined) {
                return result;
            }
        }
    }
    return undefined;
}

function searchKey() {
    const key = document.getElementById('searchKey').value;
    const result = searchKeyInObject(exampleObj, key);
    document.getElementById('result').textContent = result !== undefined 
        ? `Key "${key}" found with value: ${result}` 
        : `Key "${key}" not found.`;
}