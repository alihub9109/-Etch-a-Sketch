// Select the container and button
const container = document.querySelector(".grid-container");
const resizeBtn = document.getElementById("resize-btn");

// Default grid size
const DEFAULT_SIZE = 16;

function createGrid(size) {
  container.innerHTML = "";

  // Apply flex styles to container
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "90vw"; // 90% of viewport width
  container.style.maxWidth = "600px"; // max width on large screens
  container.style.aspectRatio = "1 / 1"; // keep it a square
  container.style.margin = "0 auto"; // center on page

  // Calculate square size
  const squareSize = 100 / size; // percentage per square

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}%`;
    square.style.aspectRatio = "1 / 1"; // force square shape
    square.style.border = "1px solid #ddd";
    square.style.boxSizing = "border-box";

    // Add hover color effect
    square.addEventListener("mouseenter", () => {
      const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
      square.style.backgroundColor = randomColor;
    });

    container.appendChild(square);
  }
}

// Resize logic
function resizeGrid() {
  let newSize = prompt("Enter grid size (max 100):");
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(newSize);
}

// Event listener
resizeBtn.addEventListener("click", resizeGrid);

// Initialize default grid
createGrid(DEFAULT_SIZE);
