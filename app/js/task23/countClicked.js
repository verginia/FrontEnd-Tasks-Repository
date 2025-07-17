document.addEventListener('DOMContentLoaded', function () {
    const clickableElement = document.getElementById('clickableElement');
    const clickCountElement = document.getElementById('clickCount');
    const resetButton = document.getElementById('resetButton');
    const letterDisplay = document.getElementById('letterDisplay');
    const chosenLetterElement = document.getElementById('chosenLetter');
    const letterElement = document.getElementById('letter');
    const hiddenMessageElement = document.getElementById('hiddenMessage');

    let clickCount = 0;

    // Click event listener
    clickableElement.addEventListener('click', () => {
        clickCount++;
        clickCountElement.textContent = `Click count: ${clickCount}`;
    });

    // Reset button event listener
    resetButton.addEventListener('click', () => {
        clickCount = 0;
        clickCountElement.textContent = `Click count: ${clickCount}`;
    });

    // Key press event listener
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(key)) {
            letterElement.textContent = key;
            chosenLetterElement.style.display = 'block';
            hiddenMessageElement.style.display = 'block';
        }
    });
});