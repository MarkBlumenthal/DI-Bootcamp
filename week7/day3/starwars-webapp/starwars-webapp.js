document.addEventListener('DOMContentLoaded', function () {
    let apiUrl = 'https://www.swapi.tech/api/people/';
    let characterInfoDiv = document.getElementById('character-info');
    let loadingDiv = document.getElementById('loading');
    let errorDiv = document.getElementById('error');
    let findCharacterButton = document.getElementById('find-character');

    // Function to show the loading animation
    function showLoading() {
        loadingDiv.classList.remove('hidden');
        characterInfoDiv.classList.add('hidden');
        errorDiv.classList.add('hidden');
    }

    // Function to hide the loading animation
    function hideLoading() {
        loadingDiv.classList.add('hidden');
    }

    // Function to show an error message
    function showError() {
        errorDiv.classList.remove('hidden');
        characterInfoDiv.classList.add('hidden');
    }

    // Function to get a random character from the API
    async function getRandomCharacter() {
        let characterId = Math.floor(Math.random() * 83) + 1; // There are 83 characters in the API
        try {
            showLoading();
            let response = await fetch(`${apiUrl}${characterId}/`);
            if (!response.ok) throw new Error('Character not found');
            let data = await response.json();
            return data.result.properties;
        } catch (error) {
            console.error('Error fetching data:', error);
            showError();
        } finally {
            hideLoading();
        }
    }

    // Function to display character information
    function displayCharacter(character) {
        if (!character) {
            showError();
            return;
        }
        document.getElementById('name').textContent = character.name;
        document.getElementById('height').textContent = character.height;
        document.getElementById('gender').textContent = character.gender;
        document.getElementById('birth-year').textContent = character.birth_year;
        // Fetching the home world requires another API call
        fetchHomeWorld(character.homeworld);
        characterInfoDiv.classList.remove('hidden');
        errorDiv.classList.add('hidden');
    }

    // Function to fetch and display home world
    async function fetchHomeWorld(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error('Home world not found');
            let homeWorld = await response.json();
            document.getElementById('home-world').textContent = homeWorld.result.properties.name;
        } catch (error) {
            document.getElementById('home-world').textContent = 'Unknown';
            console.error('Error fetching home world:', error);
        }
    }

    // Event listener for the button
    findCharacterButton.addEventListener('click', async () => {
        let character = await getRandomCharacter();
        displayCharacter(character);
    });
});
