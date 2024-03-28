document.addEventListener('DOMContentLoaded', () => {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF3380', '#33FFD5', '#FFF233', '#F28C28', '#A833FF', '#FFA833', '#8CFF33', '#33D5FF', '#FFFFFF', '#000000', '#ff0000', '#666', '#008000', '#FFFF00',];
    let palette = document.getElementById('palette');
    let grid = document.getElementById('grid');
    let clearButton = document.getElementById('clear-button'); // Get the clear button
    let selectedColor = '';
    let mouseDown = false;

    // Function to log actions
    function logAction(action) {
        console.log(action);
    }

    // Function to generate the color palette
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', () => {
            selectedColor = color;
            logAction(`Selected color: ${color}`);
        });
        palette.appendChild(colorDiv);
    });

    // Function to enable drawing while holding mouse down
    document.body.addEventListener('mousedown', () => {
        mouseDown = true;
    });
    document.body.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Function to generate the grid
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mousemove', () => {
            if (mouseDown && selectedColor) {
                cell.style.backgroundColor = selectedColor;
                logAction(`Colored a cell with: ${selectedColor}`);
            }
        });

 // Add click event for single-click fill (new functionality)
 cell.addEventListener('click', () => {
    if (selectedColor) { // Ensure a color is selected
        cell.style.backgroundColor = selectedColor;
        logAction(`Colored a cell with: ${selectedColor} on click`);
    }
});

        grid.appendChild(cell);
    }

    // Event listener for the Clear button
    clearButton.addEventListener('click', () => {
        // Get all cells
        let cells = document.querySelectorAll('#grid .cell');
        // Iterate over each cell and clear its background color
        cells.forEach(cell => {
            cell.style.backgroundColor = ''; // Set to your default grid background color
        });
        logAction('Grid cleared');
    });
});







