function setGrid(container) {
   return function (event) {
      let squareGrid, containerWidth, squareSize;
      squareGrid = event ? event.target.value : 16;
      containerWidth = container.clientWidth;

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

function setBackground(container) {
   // attach the listeners for the container
   // check what is the color choice of the user
   const color = setBackgroundColor(checkColorChoice);
   container.addEventListener("mousedown", (e) => {
      // hindi nalalagyan bg kung saan sya nag ddraw
      color(e);
      container.addEventListener("mouseover", color);
      // console.log("mousedown!");
   });

   container.addEventListener("mouseup", (e) => {
      container.removeEventListener("mouseover", color);
      // console.log("mouseup!");
   });

   // to prevent changing the background after the cursor leaves the container
   container.addEventListener("mouseleave", (e) => {
      container.removeEventListener("mouseover", color);
      // console.log("mouse leaves!");
   });
}

function setBackgroundColor(setColor) {
   // sets the background color

   return function (event) {
      let colorChoice = setColor();
      if (colorChoice === "#000000") {
         event.target.style.backgroundColor = colorChoice;
      } else if (colorChoice === "rainbow") {
         let r, g, b;
         r = Math.floor(Math.random(0) * 256);
         g = Math.floor(Math.random(0) * 256);
         b = Math.floor(Math.random(0) * 256);
         event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else {
         event.target.style.backgroundColor = colorChoice;
      }
   };
}

function setToggle() {
   // set the listener for the toggle
   const buttons = document.querySelectorAll(".color-btn");
   for (let btn of buttons) {
      btn.addEventListener("click", (e) => {
         btn.classList.add("toggle");
         if (btn.tagName === "INPUT") {
            btn.nextElementSibling.classList.remove("toggle");
         } else {
            btn.previousElementSibling.classList.remove("toggle");
         }
      });
   }
}

function checkColorChoice() {
   const buttons = document.querySelectorAll(".color-btn");
   for (let btn of buttons) {
      if (btn.classList.contains("toggle")) {
         return btn.value;
      }
   }
   return "#000000";
}

(function () {
   const container = document.querySelector(".container-grids");

   const rangeBtn = document.querySelector("#grid");
   rangeBtn.addEventListener("input", setGrid(container));

   setGrid(container)();
   setBackground(container);
   setToggle();
})();
