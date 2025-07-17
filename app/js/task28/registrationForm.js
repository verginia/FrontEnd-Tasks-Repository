function validateForm() {
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error, .success');
    errorElements.forEach(el => el.style.display = 'none');
    
    let isValid = true;

    // Validate User ID
    const userId = document.getElementById('userId').value;
    if (userId.length < 5 || userId.length > 12) {
        document.getElementById('userIdError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 7 || password.length > 12) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate Name
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z]+$/.test(name)) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate Country
    const country = document.getElementById('country').value;
    if (country === "") {
        document.getElementById('countryError').style.display = 'block';
        isValid = false;
    }

    // Validate ZIP Code
    const zip = document.getElementById('zip').value;
    if (!/^\d+$/.test(zip)) {
        document.getElementById('zipError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Sex
    const sex = document.querySelector('input[name="sex"]:checked');
    if (!sex) {
        document.getElementById('sexError').style.display = 'block';
        isValid = false;
    }

    // Validate Language
    const languages = document.querySelectorAll('input[name="language"]:checked');
    if (languages.length === 0) {
        document.getElementById('languageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}