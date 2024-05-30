let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

function displayObject(obj) {
    document.getElementById('output').textContent = JSON.stringify(obj, null, 2);
}

// Initial display
displayObject(programming);

// 1. Add the language "Go" to the end of the languages array and display the object with the changes.
function addLanguage() {
    programming.languages.push("Go");
    displayObject(programming);
}

// 2. Change the difficulty to the value of 7 and display the changed object.
function changeDifficulty() {
    programming.difficulty = 7;
    displayObject(programming);
}

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object and display the changed object.
function removeJokes() {
    delete programming.jokes;
    displayObject(programming);
}

// 4. Write the command to add a new key called isFun and a value of true to the programming object. display the changed object.
function addIsFun() {
    programming.isFun = true;
    displayObject(programming);
}

// 5. Using a loop, iterate through the languages array and display all of the languages.
function displayLanguages() {
    let output = "Languages:\n";
    programming.languages.forEach(language => {
        output += `- ${language}\n`;
    });
    document.getElementById('output').textContent = output;
}

// 6. Using a loop display all of the keys in the programming object.
function displayKeys() {
    let output = "Keys:\n";
    for (let key in programming) {
        output += `- ${key}\n`;
    }
    document.getElementById('output').textContent = output;
}

// 7. Using a loop display all of the values in the programming object.
function displayValues() {
    let output = "Values:\n";
    for (let key in programming) {
        output += `- ${programming[key]}\n`;
    }
    document.getElementById('output').textContent = output;
}