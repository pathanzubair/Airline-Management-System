document.getElementById('customer-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const mobileNumber = document.getElementById('mobile-number').value.trim();
    const dob = document.getElementById('dob').value;
    const custId = document.getElementById('cust-id').value.trim();

    let isValid = true;

    // Validate First Name
    if (firstName === '') {
        document.getElementById('first-name-error').textContent = 'First Name is required.';
        isValid = false;
    }

    // Validate Last Name
    if (lastName === '') {
        document.getElementById('last-name-error').textContent = 'Last Name is required.';
        isValid = false;
    }

    // Validate Mobile Number
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
        document.getElementById('mobile-number-error').textContent = 'Invalid mobile number. It should be 10 digits.';
        isValid = false;
    }

    // Validate Date of Birth
    if (dob === '') {
        document.getElementById('dob-error').textContent = 'Date of Birth is required.';
        isValid = false;
    }

    // Validate Customer ID
    if (custId === '') {
        document.getElementById('cust-id-error').textContent = 'Customer ID is required.';
        isValid = false;
    }

    // If valid, submit the form 
    if (isValid) {
        alert('Form is valid! You can now submit the form ');
      
    }
});
