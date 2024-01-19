'use-strict'

const gameBox = document.querySelector('.game-box');

const newGrid = function(numRows, numColumns) {
    for (let i = 0; i <numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gameBox.appendChild(gridCell);
        };

    };
};

newGrid(16,16)