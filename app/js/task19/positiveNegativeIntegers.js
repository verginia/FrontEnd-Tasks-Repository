function checkOppositeSigns() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result = document.getElementById("result");
  
    if (isNaN(number1) || isNaN(number2)) {
      result.textContent = "Please enter valid integers.";
      return;
    }
  
    if ((number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0)) {
      result.textContent = "The integers have opposite signs.";
    } else {
      result.textContent = "The integers do not have opposite signs.";
    }
  }

  /* another suggestion:
  function checkForNumbers(firstNumber, secondNumber){
    return ((firstNumber < 0 && secondNumber > 0) || (firstNumber > 0 && secondNumber < 0)) ? true : false;
  }

  */