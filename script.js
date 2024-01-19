'use-strict'
const NUMCELLS = 16;
let initColorCode = '000'

const gameBox = document.querySelector('.game-box');
const reset = document.querySelector('.reset');
const penLarge = document.querySelector('.pen-large');
const penMed = document.querySelector('.pen-medium');
const penSmall = document.querySelector('.pen-small');
const colorRand = document.querySelector('.color-random');
const colorRed = document.querySelector('.color-red');
const colorBlue = document.querySelector('.color-blue');
const colorDarken = document.querySelector('.color-darken');

const colorPicker = (color) => {
    colorKeys = {
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F'
    }
    let colorArr = [];

    if (!color) {
        let rand = -1;
        for(let i=0; i<6; i++) {
            rand = Math.floor(Math.random()*16);

            if (rand < 10) {
                colorArr.push(rand);
            } else if (rand > 9) {
                colorArr.push(colorKeys[`${rand}`])
            };
        };
        
        
    };

    return color || `#${colorArr.join('')}`;
};

const colorChecker = () => {
    if (initColorCode == '100') return colorPicker('#FF0000');
    if (initColorCode == '001') return colorPicker('#0000ff');
    if (initColorCode == '000') return colorPicker('black');
    return colorPicker();
}


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


    const gridCells = document.querySelectorAll('.grid-cell');


    gridCells.forEach((gridCell)=> {
        let cell = gridCell
        cell.style.flexBasis = `${flexB}%`;

        // Set Height of Cells:
        if (gridSize == 16) {
            cell.style.minHeight = '50px';
            cell.style.minWidth = '2px';
        }
        if (gridSize == 50) {
            cell.style.minHeight = '25px';
            cell.style.minWidth = '2px';
        }
        if (gridSize == 100) {
            cell.style.minWidth = '2px';
            cell.style.minHeight = '6px';
        }





    });
};

const colorGrid = function (num) {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach((gridCell)=> {
        gridCell.addEventListener('mouseover', (e) => {
            e.preventDefault();
            // gridCell.style.backgroundColor = colorChecker();
            if (e.buttons == 1) {
                    gridCell.style.backgroundColor = colorChecker();
                    

            }
        });

    })
}

const res = function (newGridSize) {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach((cell) => {
        cell.remove();
    });
    newGrid(newGridSize);
    changeGrid(newGridSize);
    colorGrid(); 
    initColorCode = '000'

    
}

reset.addEventListener('click', (e) => {
    e.preventDefault();
    res(NUMCELLS);
      
});

penLarge.addEventListener('click', (e) => {
    e.preventDefault();
    const gridSize = 16;
    res(gridSize);

});

penMed.addEventListener('click', (e) => {
    e.preventDefault();
    const gridSize = 25;
    res(gridSize);

});

penSmall.addEventListener('click', (e) => {
    e.preventDefault();
    const gridSize = 50;
    res(gridSize);

});

colorRand.addEventListener('click', (e) => {
    e.preventDefault();
    initColorCode = '010'
});
colorRed.addEventListener('click', (e) => {
    e.preventDefault();
    initColorCode = '100'

});
colorBlue.addEventListener('click', e => {
    e.preventDefault();
    initColorCode = '001'
    console.log(initColorCode);

})





// Initialize:
//  Grid:
res(NUMCELLS)

// Color:
let penColor = colorPicker('red');