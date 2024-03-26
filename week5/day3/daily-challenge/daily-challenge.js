

document.addEventListener("DOMContentLoaded", function() {
    const planets = [
        { name: "Gandulf", color: "grey", moons: 0 },
        { name: "Gimli", color: "yellow", moons: 1 },
        { name: "Aragon", color: "blue", moons: 1 },
        { name: "Frodo", color: "pink", moons: 2 },
        { name: "Legolas", color: "orange", moons: 1 },
        { name: "Mark", color: "gold", moons: 2 },
        { name: "Earth", color: "green", moons: 2 },
    ];

    const section = document.querySelector('.listPlanets');

    planets.forEach((planet, index) => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.classList.add(`planet-${index}`); // Unique class for each planet for custom styles
        planetDiv.style.backgroundColor = planet.color; // Set background color
        
        section.appendChild(planetDiv);

        // Create moons if there are any
        for (let i = 0; i < planet.moons; i++) {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');

            moonDiv.style.left = `${i * 35}px`;
            moonDiv.style.right = `${i * 35}px`;
            planetDiv.appendChild(moonDiv);
        }
    });
});
