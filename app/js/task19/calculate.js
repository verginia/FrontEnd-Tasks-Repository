function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = document.getElementById("result");
  
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }
  
    let multiplicationResult = num1 * num2;
  
    result.textContent = "The Result is: " + multiplicationResult;
  }
  
  function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = document.getElementById("result");
  
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }
  
    if (num2 === 0) {
      result.textContent = "Cannot divide by zero.";
      return;
    }
  
    let divisionResult = num1 / num2;
  
    result.textContent = "The Result is: " + divisionResult;
  }

  /* another suggestion:
  function multiply(){
    firstInputNumber = document.getElementById("firstNumber").value;
    secondInputNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = firstInputNumber * secondInputNumber;
  }

  function divide(){
    firstInputNumber = document.getElementById("firstNumber").value;
    secondInputNumber = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = firstInputNumber / secondInputNumber;
  }
  */