// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number 
// of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before 
// (e.g. 960px wide) so that you’ve got a new sketch pad. 
// 
// Tip: Set the limit for the user input to a maximum of 100. 
// A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or 
// crashing that we want to prevent.
//      1. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
//      2. Also check out prompts.
//      3. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels
//         used.
const array = document.getElementsByClassName("squares");
const grid = document.querySelector('#grid');
let sq = 3;
//Initial conditions
for (i=0;i<(sq*sq);i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    grid.appendChild(squares);
    squares.setAttribute('style', 'color: blue; background: white'); 
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

//click function
function promptFunction() {
    sq = prompt('# SQ'); 
    console.log(sq);
    for (i=0;i<array.length;i++) {
    document.getElementsByClassName("squares")[i].style.flexBasis = `calc(100%/${sq} - 2px)`;
    }
}





//     console.log(style)
// });
// array.forEach((item) => { // forEach function cycles through numbers in 'array' and stores in item
//     if (!args.includes(item)) { // if arguements [], 3, 2 does not include item 1,2,3,4
//         newArray.push(item); // push into new array 
//     }
// }); // close arrow function

// document.getElementsByClassName("squares")[0].style.flexBasis = "calc(100%/2 - 2px)";

// document.getElementsByClassName("squares").forEach (() => {
//     document.getElementsByClassName("squares").style.flexBasis = "calc(100%/16 - 2px)"
// });

// document.getElementsByClassName("squares")[0].style.flexBasis = "calc(100%/16 - 2px)";






// let x = promptFunction();
// console.log(x);


// const squares = document.getElementById("squares");
// document.getElementById("width").addEventListener("input", e => {
//     squares.style.width = e.target.value + "px";
//   });
