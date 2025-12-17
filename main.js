/* 

   OBJECTIVES
   1. Have a .container containing 2 section
      * section 1 contains the option such as grid size and color bg picker
      * section for the squares
   2. Create a 16x16 grid (default), grid limit is 100
   3. Mousehold or click to change bg color of each square
   
   ISSUE
   1. How to change the number of grids but with the container size still the same
   2. How to make the color more darker when the mouse clicked on a square that already has a background color

*/

let gridContainer = document.querySelector(".container-grids");
const rangeBtn = document.getElementById("grid");
let colorSetting = document.getElementById("color");

rangeBtn.addEventListener("mouseup", (e) => {
   // formula for creating dynamic grid
   gridContainer.innerHTML = "";
   let value = e.target.value;
   let width = gridContainer.clientWidth;
   let squareSize = width / value
   let total = 0
   document.getElementById("grid-current-value").textContent = value;

   for (let squareCount = 0; squareCount < (value * value); squareCount++) {
      let square = document.createElement("div");
      square.setAttribute("class", "grid-item");
      square.style.width = ` ${squareSize}px `;
      square.style.height = ` ${squareSize}px `;
      gridContainer.appendChild(square);
      total += 1
   }

   console.log(total);
   
   if (gridContainer.lastElementChild.clientWidth > squareSize) {
      console.log(squareSize);
      console.log(gridContainer.lastElementChild.clientWidth);
      total - 1
      gridContainer.lastElementChild.remove();
   } 
   console.log(total);
   
});
