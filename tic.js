document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });
    const ticketNumber = document.getElementById('ticket-number').value.trim();
    const flightName = document.getElementById('flight-name').value;
    const numberAdults = document.getElementById('number-adults').value.trim();
    const numberInfants = document.getElementById('number-infants').value.trim();
    const departureTime = document.getElementById('departure-time').value;

    let isValid = true;

    // Validate Ticket Number
    if (ticketNumber === '') {
        document.getElementById('ticket-number-error').textContent = 'Ticket Number is required.';
        isValid = false;
    }

    // Validate Flight Name
    if (flightName === '') {
        document.getElementById('flight-name-error').textContent = 'Flight Name is required.';
        isValid = false;
    }

    // Validate Number of Adults
    if (numberAdults === '' || isNaN(numberAdults) || numberAdults < 1) {
        document.getElementById('number-adults-error').textContent = 'Number of Adults must be a positive number.';
        isValid = false;
    }

    // Validate Number of Infants
    if (numberInfants === '' || isNaN(numberInfants) || numberInfants < 0) {
        document.getElementById('number-infants-error').textContent = 'Number of Infants must be a non-negative number.';
        isValid = false;
    }

    // Validate Departure Time
    if (departureTime === '') {
        document.getElementById('departure-time-error').textContent = 'Departure Time is required.';
        isValid = false;
    }
    // If valid, submit the form 
    if (isValid) {
        alert('Form is valid! You can now submit the form ');
        
    }
});
