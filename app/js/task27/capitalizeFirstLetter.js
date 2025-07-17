function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

document.getElementById('capitalizeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const capitalizedText = capitalizeWords(inputText);
    document.getElementById('outputText').textContent = capitalizedText;
});