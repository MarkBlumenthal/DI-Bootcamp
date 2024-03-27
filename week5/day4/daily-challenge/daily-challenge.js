document.addEventListener('DOMContentLoaded', function() {
    const libButton = document.getElementById('lib-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const storyElement = document.getElementById('story');
    let currentInputs = {};
    let stories = [];

    libButton.addEventListener('click', function(event) {
        event.preventDefault();
        const noun = document.getElementById('noun').value;
        const adjective = document.getElementById('adjective').value;
        const person = document.getElementById('person').value;
        const verb = document.getElementById('verb').value;
        const place = document.getElementById('place').value;

        console.log('Inputs:', { noun, adjective, person, verb, place }); 


        if (!noun || !adjective || !person || !verb || !place) {
            console.log('Validation failed: One or more fields are empty.'); // Log validation failure
            alert('Please fill in all fields.');
            return;
        }

        currentInputs = { noun, adjective, person, verb, place };
        generateStories();
        displayStory();
    });

    shuffleButton.addEventListener('click', function(event) {
        console.log('Shuffle button clicked.');
        displayStory();
    });

    function generateStories() {
        stories = [
            `${currentInputs.person} once ${currentInputs.verb} a ${currentInputs.adjective} ${currentInputs.noun} in ${currentInputs.place}.`,
            `In ${currentInputs.place}, a ${currentInputs.noun} was ${currentInputs.verb} by ${currentInputs.person}, which was quite ${currentInputs.adjective}.`,
            `${currentInputs.person} found a ${currentInputs.adjective} ${currentInputs.noun} and decided to ${currentInputs.verb} it in ${currentInputs.place}.`
        ];
    }

    function displayStory() {
        const story = stories[Math.floor(Math.random() * stories.length)];
        console.log('Displaying story:', story);
        storyElement.innerText = story;
    }
});
