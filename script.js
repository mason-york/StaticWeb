const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": "bigid1",
  "password": ""
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
        displayCocktail(scanResults)
        //console.log(scanResults)
        //displayResults(scanResults);
    } catch (error) {
        resultsContainer.innerHTML = `<p>Error fetching scan results: ${error.message}</p>`;
    }
});


    function displayCocktail(data) {
        console.log(data)
        const cocktailDiv = document.getElementById("resultsContainer");
  
        const cocktailName = data.auth_token;
        const heading = document.createElement("div");
        heading.innerHTML = cocktailName;
        cocktailDiv.appendChild(heading);
      } ;

