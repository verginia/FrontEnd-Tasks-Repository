// Function to set the max date for the date of birth input
function setMaxDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const maxDate = yyyy + '-' + mm + '-' + dd;
    document.getElementById('dob').setAttribute('max', maxDate);
}

// Call setMaxDate on page load
window.onload = setMaxDate;

function validateForm() {
    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.style.display = 'none');
    
    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById('firstName').value;
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName').value;
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 7 || password.length > 12) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate Date of Birth
    const dob = document.getElementById('dob').value;
    const today = new Date().toISOString().split('T')[0];
    if (dob === "" || dob >= today) {
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please correct the errors in the form.");
    }
}