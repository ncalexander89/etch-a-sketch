const grid = document.querySelector('#grid');
let sq = 3;
//functions
function run (sq) {
for (i=0;i<(sq*sq);i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    grid.appendChild(squares);
    squares.setAttribute('style', 'color: blue; background: white'); 
}
}
window.addEventListener('mouseover', function(color) {
        if (color.target.className==='squares'){
        color.target.style.backgroundColor = "green";
        }
        window.addEventListener('click', function(e) {
            if (e.target.className==='clear'){
            color.target.style.backgroundColor = "";
            }
        });
})
run(sq);
//user input number of squares per side
function promptFunction(sq) {
    deleteChild();
    sq = prompt('# SQ'); 
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
