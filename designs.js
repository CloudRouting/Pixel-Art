// Use IIFE to set strict mode
(function(document) {
  "use strict";

  // Define variable and DOM elements
  const elements = {
    colorPicker: document.getElementById("colorPicker"),
    gridCanvas: document.getElementById("pixelCanvas"),
    inputWidth: document.getElementById("inputWidth"),
    inputHeight: document.getElementById("inputHeight")
  };

  // Add event listeners
  const init = function() {
    document
      .getElementById("sizePicker")
      .addEventListener("submit", makeGrid, false);
    elements.gridCanvas.addEventListener("click", setGridColor);
  };

  // When size is submitted by the user, call makeGrid()
  function makeGrid(event) {
    event.preventDefault();
    const gridSize = getGridSize();

    // Call the clearCanvas function for a clean grid
    clearCanvas();
    let row = 0;
    while (row < gridSize.numberOfRows) {
      let tr = elements.gridCanvas.insertRow(row);
      for (let col = 0; col < gridSize.numberOfColumns; col++) {
        tr.insertCell(col);
      }
      row++;
    }
  }

  // Select color input
  function setGridColor(event) {
    let color = elements.colorPicker.value;
    event.target.setAttribute("style", "background-color: " + color);
  }

  // Clear the canvas
  function clearCanvas() {
    elements.gridCanvas.innerHTML = "";
  }

  // Select size input for number of rows and columns
  function getGridSize() {
    let numberOfRows = elements.inputHeight.value;
    let numberOfColumns = elements.inputWidth.value;
    return {
      numberOfColumns: parseInt(numberOfColumns),
      numberOfRows: parseInt(numberOfRows)
    };
  }
  init();
})(document);
