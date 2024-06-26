const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-button');
let opacityIncrement = 0.1; 
let maxOpacity = 1; 

function randomRGB() {
    // Generate random values for RGB (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function darkenSquare(square) {
    let currentOpacity = parseFloat(square.style.opacity);
    if (currentOpacity > 0) {
        square.style.opacity = (currentOpacity - opacityIncrement).toFixed(1);
    }
}

function createGrid(size) {
    container.innerHTML = ''; 
    const squareSize = 960 / size; 
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = 'white'; 
        square.style.opacity = maxOpacity; 
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randomRGB(); 
            darkenSquare(square); 
        });
        container.appendChild(square);
    }
}

resetButton.addEventListener('click', () => {
    let size = parseInt(prompt('Enter the number of squares per side for the new grid (max 100):'));
    if (size > 100) size = 100; 
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert('Please enter a valid number');
    }
});

createGrid(16); 
