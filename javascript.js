// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail 
// through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. 
// You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.
const grid = document.querySelector('#grid');
// div.setAttribute('style', 'color: blue; background: red');    

for (i=0;i<256;i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    grid.appendChild(squares);
    squares.setAttribute('style', 'color: blue; background: white');    

}

// window.addEventListener('mouseenter', function (e) { 
//     // e.target.style.color = '';

// setTimeout(function() {
//     e.target.style.color = "";
//   }, 500);
// }, false);

window.addEventListener('mouseover', function(e) {
    // highlight the mouseover target
// console.log(e.target.className)

if (e.target.className==='squares'){
    e.target.style.backgroundColor = "green";
}
    // reset the color after a short delay
    setTimeout(function() {
      e.target.style.backgroundColor = "";
    }, 500);
  }, false);
