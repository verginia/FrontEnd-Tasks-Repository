document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const address = document.getElementById('address');
        const dob = document.getElementById('dob');
        const email = document.getElementById('email');

        // Reset error messages
        resetErrors();

        // Validate each field
        let isValid = true;
        if (name.value.trim() === '') {
            showError('name', 'Name is required.');
            isValid = false;
        }
        if (surname.value.trim() === '') {
            showError('surname', 'Surname is required.');
            isValid = false;
        }
        if (address.value.trim() === '') {
            showError('address', 'Address is required.');
            isValid = false;
        }
        if (dob.value.trim() === '') {
            showError('dob', 'Day of Birth is required.');
            isValid = false;
        }
        if (email.value.trim() === '') {
            showError('email', 'Email is required.');
            isValid = false;
        }

        // Display success message if form is valid
        if (isValid) {
            successMessage.style.display = 'block';
            // You can submit the form here if needed
            // form.submit();
        }
    });

    function showError(fieldName, errorMessage) {
        const errorSpan = document.getElementById(`${fieldName}Error`);
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = 'inline';
    }

    function resetErrors() {
        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => {
            span.textContent = '';
            span.style.display = 'none';
        });
    }
});