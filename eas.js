// prompt function to get the number of grid squares
let size= prompt ("Give me a size.")

// function to create a grid 
const grid= document.createElement('div');
grid.classList.add('grid-container');
document.body.appendChild(grid);
grid.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
grid.style.gridTemplateRows=`repeat(${size}, 1fr)`;

function createGrid() {
    for (i=0; i<size*size; i++) {
    const square=document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    if (size<=100) {
        square.style.width=`${470/size}px`;
        square.style.height=`${470/size}px`;
    }
    }
}

createGrid(size);
console.log(size);

// function for each mode of hover effect 

