document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const nameElement = document.getElementById('name');
    const heightElement = document.getElementById('height');
    const genderElement = document.getElementById('gender');
    const birthYearElement = document.getElementById('birth-year');
    const homeWorldElement = document.getElementById('home-world');

    button.addEventListener('click', function() {
        console.log('Button clicked.');
        fetchCharacter();
    });

    function clearInfo() {
        // Clears the info in the HTML elements
        nameElement.innerHTML = '';
        heightElement.innerHTML = '';
        genderElement.innerHTML = '';
        birthYearElement.innerHTML = '';
        homeWorldElement.innerHTML = '';
    }

    function fetchCharacter() {
        const characterId = Math.floor(Math.random() * 83) + 1; 
        const url = `https://www.swapi.tech/api/people/${characterId}`;

        clearInfo(); // Clear existing info
        // Display loading icon
        nameElement.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
        console.log('Fetching character with ID:', characterId);

        fetch(url)
            .then(response => {
                console.log('Received response for character:', response);
                return response.json();
            })
            .then(data => {
                const character = data.result.properties;
                const homeWorldUrl = character.homeworld;

                console.log('Character data:', character);

                // Fetch additional data for homeworld
                fetch(homeWorldUrl)
                    .then(response => {
                        console.log('Received response for homeworld:', response);
                        return response.json();
                    })
                    .then(hwData => {
                        console.log('Homeworld data:', hwData);
                        displayCharacter(character, hwData.result.properties.name);
                    })
                    .catch(error => {
                        console.error('Error fetching homeworld:', error);
                        displayError();
                    });
            })
            .catch(error => {
                console.error('Error fetching character:', error);
                displayError();
            });
    }

    function displayCharacter(character, homeWorldName) {
        nameElement.textContent = `Name: ${character.name}`;
        heightElement.textContent = `Height: ${character.height} cm`;
        genderElement.textContent = `Gender: ${character.gender}`;
        birthYearElement.textContent = `Birth Year: ${character.birth_year}`;
        homeWorldElement.textContent = `Home World: ${homeWorldName}`;
    }

    function displayError() {
        clearInfo(); // Clear existing info before displaying error message
        nameElement.textContent = 'Oh No! That person isnt available';
        console.error('Displaying error message to the user.');
    }
});







