const gridContainer=document.querySelector('.grid-container')

function createGrid() {
    for (let i=0; i<16; i++) {
        const square=document.createElement('div');
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
}

for (let i=0; i<16; i++) {
    createGrid();
}