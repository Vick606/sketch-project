const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    container.innerHTML = ''; 
    const squareSize = 960
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';

        });
        container.appendChild(square);
    }
}
resetButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter the number of squares per side for the new grid (max 100):'));
    if (size > 100) size = 100; // Limit the size to 100
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert('Please enter a valid number');
    }
});

createGrid(16);
