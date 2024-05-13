function calculateDifference() {
    let numberInput = document.getElementById("number").value;
    let result = document.getElementById("result");

   
    // Calculate the difference
    let difference = Math.abs(numberInput - 13);


    if (numberInput > 13) {
        difference *= 2;
    } else {
        13 - numberInput;
    }

    // Display the result
    result.textContent = "The difference is: " + difference;
}