document.addEventListener('DOMContentLoaded', () => {
    let gifForm = document.getElementById('gifForm');
    let gifSearch = document.getElementById('gifSearch');
    let gifContainer = document.getElementById('gifContainer');
    let deleteAllButton = document.getElementById('deleteAll');

    gifForm.onsubmit = async (e) => {
        e.preventDefault();
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${gifSearch.value}`);
        let data = await response.json();
        appendGif(data.data.images.original.url);
    };

    deleteAllButton.onclick = () => gifContainer.innerHTML = '';

    function appendGif(gifUrl) {
        let gifElement = document.createElement('div');
        gifElement.innerHTML = `<img src="${gifUrl}" alt="Gif"><button onclick="this.parentElement.remove()">DELETE</button>`;
        gifContainer.appendChild(gifElement);
    }
});
