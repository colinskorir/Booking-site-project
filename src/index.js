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

    const airports = {
        'NYC': 'New York (JFK)',
        'LAX': 'Los Angeles (LAX)',
        'LHR': 'London (LHR)',
        'HOK': 'Hokkaido, Japan (HOK)',
        'ZAM': 'Zambia (ZAM)',
        'TOK': 'Tokyo (TOK)',
    };
    const apiKey = 'e0c7352ba191cc30c6925cf17111281f';
    const apiurl = 'https://api.aviationstack.com/v1/flights?access_key=e0c7352ba191cc30c6925cf17111281f';

    try {
        const response = await fetch(apiurl);
        const data = await response.json();
        
        const routeDisplay = document.getElementById('routeDisplay');
        let displayText = '<p>Flight Details:</p>';
        