const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": "bigid1",
  "password": "bigid111"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const apiUrl = 'https://0-2446.mybigid.com/api/v1/sessions'; // Replace with your Azure Function URL

document.getElementById('fetchResultsBtn').addEventListener('click', async () => {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    try {
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const scanResults = await response.json();
        displayResults(scanResults);
    } catch (error) {
        resultsContainer.innerHTML = `<p>Error fetching scan results: ${error.message}</p>`;
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <p>Status: ${result.status}</p>
        `;
        resultsContainer.appendChild(resultDiv);
    });
}
