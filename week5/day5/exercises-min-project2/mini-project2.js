document.addEventListener('DOMContentLoaded', () => {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF3380', '#33FFD5', '#FFF233', '#F28C28', '#A833FF', '#FFA833', '#8CFF33', '#33D5FF'];
    let palette = document.getElementById('palette');
    let grid = document.getElementById('grid');
    let selectedColor = '';
    let mouseDown = false;

    // Log the action
    function logAction(action) {
        console.log(action);
    }

    // Generate color palette
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

    // Enable drawing while holding mouse down
    document.body.addEventListener('mousedown', () => {
        mouseDown = true;
    });

    document.body.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Generate grid
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mousemove', () => {
            if (mouseDown && selectedColor) {
                cell.style.backgroundColor = selectedColor;
                logAction(`Colored a cell with: ${selectedColor}`);
            }
        });
        grid.appendChild(cell);
    }
});

