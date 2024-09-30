document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });
    const paymentId = document.getElementById('payment-id').value.trim();
    const flightName = document.getElementById('flight-name').value;
    const moneyPaid = document.getElementById('money-paid').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;

    let isValid = true;

    // Validate Payment ID
    if (paymentId === '') {
        document.getElementById('payment-id-error').textContent = 'Payment ID is required.';
        isValid = false;
    }

    // Validate Flight Name
    if (flightName === '') {
        document.getElementById('flight-name-error').textContent = 'Flight Name is required.';
        isValid = false;
    }

    // Validate Money Paid
    if (moneyPaid === '' || isNaN(moneyPaid) || moneyPaid <= 0) {
        document.getElementById('money-paid-error').textContent = 'Money Paid must be a positive number.';
        isValid = false;
    }

    // Validate Payment Method
    if (paymentMethod === '') {
        document.getElementById('payment-method-error').textContent = 'Payment Method is required.';
        isValid = false;
    }

    // If valid, submit the form 
    if (isValid) {
        alert('Form is valid! You can now submit the form ');

    }
});
