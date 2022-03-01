const grid = document.querySelector('#grid');
let sq = 64;

//functions number of squares
function run (sq) {
    for (i=0;i<(sq*sq);i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        grid.appendChild(squares);
        squares.setAttribute('style', 'color: blue; background: white'); 
    }
}

//mouse over function
let count = 0;
window.addEventListener('mouseover', function(color) {
        if (color.target.className==='squares'){
            count += 1; // squares completely black after 1000 pass overs
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            let rN = randomBetween(0, 255);
            let r = rN - (rN)/(1000/`${count}`);
            let gN = randomBetween(0, 255);
            let g = gN - (gN)/(1000/`${count}`);
            let bN = randomBetween(0, 255);
            let b = bN - (bN)/(1000/`${count}`);
            let rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
            color.target.style.backgroundColor = rgb;
        }
// clear function
window.addEventListener('click', function(e) {
            if (e.target.className==='clear'){
            color.target.style.backgroundColor = "";
            count = 0;
            }
        });
    })

run(sq);
//user input number of squares per side
function promptFunction(sq) {
    deleteChild();
    sq = prompt('# SQ'); 
    if(sq>64) {
        alert('must be less than 64');
        sq = prompt('# SQ'); 
    }
    run(sq);  
//updates flex basis through DOM
    const array = document.getElementsByClassName("squares");
    for (i=0;i<array.length;i++) {
    document.getElementsByClassName("squares")[i].style.flexBasis = `calc(100%/${sq} - 0.5px)`;
    }
}
// deletes intitial squares from grid
function deleteChild() {
    let e = document.querySelector("#grid");
    let child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}