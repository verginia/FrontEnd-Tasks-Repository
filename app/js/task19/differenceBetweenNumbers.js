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

/* another suggestion:
function difference(number){
    return number <= 13 ? 13 - number : (number - 13) * 2;
}
or
function getDifference(n){
    return (n > 13) ? (n - 13) * 2 : (13 - n);
}

*/