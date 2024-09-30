document.getElementById('flight-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });
    const flightName = document.getElementById('flight-name').value.trim();
    const classes = document.querySelectorAll('input[name="class"]:checked');
    const capacity = document.getElementById('capacity').value.trim();
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    let isValid = true;

    // Validate Flight Name
    if (flightName === '') {
        document.getElementById('flight-name-error').textContent = 'Flight Name is required.';
        isValid = false;
    }

    // Validate Classes
    if (classes.length === 0) {
        document.getElementById('class-error').textContent = 'At least one class must be selected.';
        isValid = false;
    }

    // Validate Capacity
    if (capacity === '' || isNaN(capacity) || capacity < 1) {
        document.getElementById('capacity-error').textContent = 'Capacity must be a positive number.';
        isValid = false;
    }

    // Validate Source
    if (source === '') {
        document.getElementById('source-error').textContent = 'Source is required.';
        isValid = false;
    }

    // Validate Destination
    if (destination === '') {
        document.getElementById('destination-error').textContent = 'Destination is required.';
        isValid = false;
    }

    // Validate Source and Destination are different
    if (source === destination) {
        document.getElementById('destination-error').textContent = 'Destination cannot be the same as Source.';
        isValid = false;
    }

    // If valid, submit the form 
    if (isValid) {
        alert('Form is valid! You can now submit the form ');
        
    }
});
