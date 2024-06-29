document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const inputData = document.getElementById('inputData').value.trim();
    if (inputData === '') {
        alert('Please enter names and ages.');
        return;
    }

    // Split input by new lines to handle multiple entries
    const individuals = inputData.split('\n');

    // Filter seniors (age 65 and above)
    const seniorCitizens = filterSeniors(individuals);

    // Display results
    displayResults(seniorCitizens);
});

function filterSeniors(individuals) {
    const seniors = [];
    individuals.forEach(person => {
        const [name, ageStr] = person.split(',').map(item => item.trim());
        const age = parseInt(ageStr, 10);
        if (!isNaN(age) && age >= 65) {
            seniors.push({ name, age });
        }
    });
    return seniors;
}

function displayResults(seniors) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (seniors.length === 0) {
        resultsDiv.innerHTML = '<p>No senior citizens found.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    `;
    seniors.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.name}</td>
            <td>${person.age}</td>
        `;
        table.appendChild(row);
    });
    resultsDiv.appendChild(table);
}
