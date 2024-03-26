

document.addEventListener("DOMContentLoaded", function() {
    const planets = [
        { name: "Gandulf", color: "yellow", moons: [] },
        { name: "Legolas", color: "blue", moons: [{ name: "Moon" }] },
        { name: "Gimli", color: "red", moons: [{ name: "Axe" }, { name: "Hi" }] },
        { name: "Aragon", color: "orange", moons: new Array(1).fill({}) }, 
        { name: "Boromir", color: "gold", moons: new Array(2).fill({}) },  
    ];

    const section = document.querySelector('.listPlanets');

    planets.forEach(planet => {
        // Create the planet div
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet');
        planetDiv.style.backgroundColor = planet.color;
        
        // Append the planet to the section
        section.appendChild(planetDiv);

        // Create moons for each planet
        planet.moons.forEach(moon => {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            // Positioning the moon randomly around the planet for visual effect
            moonDiv.style.right = `${Math.random() * 70}px`;
            moonDiv.style.top = `${Math.random() * 70}px`;

            planetDiv.appendChild(moonDiv);
        });
    });
});
