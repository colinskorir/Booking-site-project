document.getElementById('bookingForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    

    // Check if both are selected and same
    if (departure && destination && departure === destination) {
        alert('Departure and destination cannot be the same!');
        return false;
    }
