let valuesArray = [];

    function addValue() {
        let valueInput = document.getElementById("valueInput").value;
        let errorMessage = document.getElementById("errorMessage");
        let result = document.getElementById("result");

        // Reset error message
        errorMessage.innerText = "";
        
        // Check if the input is empty
        if (valueInput.trim() === "") {
            errorMessage.innerText = "Please enter a value.";
            return;
        }

        // Add value to the array
        valuesArray.push(valueInput);

        // Clear input field
        document.getElementById("valueInput").value = "";

        // Clear result display
        result.innerHTML = "";
    }

    function displayArray() {
        let result = document.getElementById("result");
        result.innerHTML = ""; // Clear previous results

        if (valuesArray.length === 0) {
            result.innerHTML = "The array is empty.";
            return;
        }

        // Display each element's position and value
        valuesArray.forEach(function(value, index) {
            result.innerHTML += "Position " + index + ": " + value + "<br>";
        });
    }