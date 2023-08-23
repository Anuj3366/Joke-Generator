const generateButton = document.getElementById('generateButton');
const jokeContainer = document.getElementById('jokeContainer');

generateButton.addEventListener('click', fetchJoke);

function fetchJoke() {
    // Replace with the actual API endpoint that provides jokes
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            displayJoke(data.setup, data.punchline);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            displayJoke('Failed to fetch joke. Please try again later.', '');
        });
}

function displayJoke(setup, punchline) {
    jokeContainer.innerHTML = `
        <p>${setup}</p>
        <p>${punchline}</p>
    `;
}
