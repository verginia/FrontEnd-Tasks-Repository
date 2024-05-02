function convertCelsiusToFahrenheit() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    let fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById("celsiusResult").innerText = `${celsiusInput}°C is ${fahrenheitResult}°F`;
  }
  
  function convertFahrenheitToCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheitInput").value;
    let celsiusResult = (fahrenheitInput - 32) * 5/9;
    document.getElementById("fahrenheitResult").innerText = `${fahrenheitInput}°F is ${celsiusResult}°C`;
  }
  function clearForm() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
} 