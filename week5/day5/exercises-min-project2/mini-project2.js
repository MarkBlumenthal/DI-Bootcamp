document.addEventListener('DOMContentLoaded', () => {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF3380', '#33FFD5', '#FFF233', '#F28C28', '#A833FF', '#FFA833', '#8CFF33', '#33D5FF'];
    let palette = document.getElementById('palette');
    let grid = document.getElementById('grid');
    let selectedColor = '';
    let mouseDown = false; // this track whether the mouse is pressed down

    // Detect mouse down and up events on the whole document to handle dragging outside the grid
    document.addEventListener('mousedown', (e) => {
        // Prevent default text selection behavior while dragging
        e.preventDefault();
        mouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Generate color palette
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', () => {
            selectedColor = color;
        });
        palette.appendChild(colorDiv);
    });

    // Generate grid
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        
        // Change to listen for mouseover
        cell.addEventListener('mouseover', () => {
            if (mouseDown && selectedColor) {
                cell.style.backgroundColor = selectedColor;
            }
        });

        // Also allow cell to be colored by clicking
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = selectedColor;
        });
        
        grid.appendChild(cell);
    }
});

