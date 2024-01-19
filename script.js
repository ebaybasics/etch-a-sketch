'use-strict'
const NUMCELLS = 50;

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

const changeGrid = function(gridSize) {
    const numCells = gridSize;
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

const res = function (newGridSize) {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach((cell) => {
        cell.remove();
    });
    newGrid(newGridSize);
    changeGrid(newGridSize);
}

reset.addEventListener('click', (e) => {
    e.preventDefault();
    res(NUMCELLS);   
});

penLarge.addEventListener('click', (e) => {
    e.preventDefault();
    const gridSize = 16;
    res(gridSize);
    newGrid(gridSize);
    changeGrid(gridSize);


})


newGrid(NUMCELLS);
changeGrid(NUMCELLS);