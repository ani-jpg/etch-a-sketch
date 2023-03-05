// prompt function to get the number of grid squares
let size= prompt ("Give me a size.")

// choices
const reset=document.querySelector('#reset')

const eraser= document.querySelector('#eraser')
let eraserClick;
eraser.addEventListener ('click', () => {
    eraserClick=true;
})

const colorPicker = document.getElementById("colorpicker");
let selectedColor = colorPicker.value;
let color;
colorPicker.addEventListener ('change', () => {
    selectedColor=colorPicker.value;
    console.log(selectedColor);
    color=true;
    eraserClick=false;
})


// function to create a grid 
const middleContainer=document.querySelector('.middle-container');
const grid= document.createElement('div');
grid.classList.add('grid-container');
middleContainer.appendChild(grid);
grid.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
grid.style.gridTemplateRows=`repeat(${size}, 1fr)`;

function createGrid() {
    for (i=0; i<size*size; i++) {
    const square=document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    if (size<=100) {
        square.style.width=`${510/size}px`;
        square.style.height=`${510/size}px`;
    }

    square.addEventListener('mouseover',()=> {
        if (eraserClick==true) {
            square.style.backgroundColor='';
        }

        else if (color==true) {
            square.style.backgroundColor=selectedColor;
        }

        else {
            square.style.backgroundColor='black';
        }
    })

    reset.addEventListener ('click', ()=> {
        square.style.backgroundColor='';
    })

    }
}

createGrid(size);
console.log(size);
