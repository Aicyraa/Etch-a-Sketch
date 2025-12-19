/* 

   OBJECTIVES
   1. Have a .container containing 2 section
      * section 1 contains the option such as grid size and color bg picker
      * section for the squares
   2. Create a 16x16 grid (default), grid limit is 100
   3. Mousehold or click to change bg color of each square
   
   ISSUE
   1. How to change the number of grids but with the container size still the same /
   2. How to make the color more darker when the mouse clicked on a square that already has a background color
   3. Paano mag papalit ng bg color
   4. paano mag ttrigger ung event listener habang naka click
*/

function setGrid(container) {

   return function (event) {
      let squareGrid, containerWidth, squareSize;
      squareGrid = event ? event.target.value : 16;
      containerWidth = container.clientWidth;
      console.log(squareGrid);
      
      removeGrid();
      for (let squares = 0; squares < squareGrid * squareGrid; squares++) {
         let square = document.createElement("div");
         squareSize = containerWidth / squareGrid;
         square.setAttribute("class", "grid-item");
         square.style.width = `${squareSize}px`;
         square.style.height = `${squareSize}px`;
         container.appendChild(square);
      }

      if (container.lastElementChild.clientWidth > squareSize) {
         container.lastElementChild.remove(); // removes the extra square
      }
   };
}

function removeGrid() {
   const currentGridItem = document.querySelectorAll(".grid-item");
   currentGridItem.forEach((item) => {
      item.remove();
   });
}

(function () {
   const container = document.querySelector(".container-grids");
   const rangeBtn = document.querySelector("#grid");
   rangeBtn.addEventListener("input", setGrid(container)); 

   setGrid(container)();
})();
