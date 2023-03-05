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

const rainbowChoice= document.querySelector('#rainbow');
let rainbow;
rainbowChoice.addEventListener('click', () => {
    rainbow=true;
    color=false;
    eraserClick=false;
})


// function to create the interactive grid 
const middleContainer=document.querySelector('.middle-container');
const grid= document.createElement('div');
grid.classList.add('grid-container');
middleContainer.appendChild(grid);
grid.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
grid.style.gridTemplateRows=`repeat(${size}, 1fr)`;


let hover=true;

function createGrid() {
    for (i=0; i<size*size; i++) {
    const square=document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    if (size<=100) {
        square.style.width=`${510/size}px`;
        square.style.height=`${510/size}px`;
    }
    
    function hoverFunction () {
        if (eraserClick==true) {
            square.style.backgroundColor='';
        }

        else if (color==true) {
            square.style.backgroundColor=selectedColor;
        }

        else if (rainbow==true) {
            square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }

        else {
            square.style.backgroundColor= 'black';
        }
    }

    square.addEventListener('mouseover', () => {
        if (hover==true) {
            hoverFunction ();
            square.addEventListener('click', () => {
                hover=false;
                square.removeEventListener('mouseover', hoverFunction);
                console.log("HI")
            })
        }
        else if (hover==false) {
            square.addEventListener('click', () => {
                hover=true;
                console.log("BYE")
            })
        }
    })


    

    reset.addEventListener ('click', ()=> {
        square.style.backgroundColor='';
        rainbow=false;
        eraserClick=false;
        color=false;
    })

    
    }
}


createGrid(size);
console.log(size);
