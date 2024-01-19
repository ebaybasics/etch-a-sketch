'use-strict'
const NUMCELLS = 16;

const gameBox = document.querySelector('.game-box');
const reset = document.querySelector('.reset');
const penLarge = document.querySelector('.pen-large');


const newGrid = function(gridSize) {
    
    for (let i = 0; i <gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gameBox.appendChild(gridCell);
        };

    };
    
};

const changeGrid = function() {
    const numCells = NUMCELLS;
    const flexB = ((-.05*numCells+6));
    // newGrid(numCells);

    const gridCells = document.querySelectorAll('.grid-cell');

    gridCells.forEach((gridCell, key, nodeList)=> {
        let cell = nodeList[`${key}`]

        cell.style.flexBasis = `${flexB}%`;


        
        nodeList[`${key}`].addEventListener('mouseover', (e) => {
            e.preventDefault();

            if (e.buttons == 1) nodeList[`${key}`].style.backgroundColor = 'red';
        })

    });



};

newGrid(NUMCELLS);
changeGrid();

reset.addEventListener('click', (e) => {
    e.preventDefault();

    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = '#99AABB';
    })
    
});

penLarge.addEventListener('click', (e) => {
    e.preventDefault();
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        // console.log(window.getComputedStyle(cell).backgroundColor)
        if (window.getComputedStyle(cell).backgroundColor == 'rgb(153 , 170,187') {
            console.log('blue')
        }
    })

})


