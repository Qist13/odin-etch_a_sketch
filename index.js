const GRID_SIZE = 640;
const grid = document.getElementsByClassName("grid")[0];
const sliderLabel = document.getElementById("slider-val");

const slider = document.getElementById("slider");
slider.addEventListener("input", () => initGUI());
const btnColor = document.getElementById("btn-color");
btnColor.addEventListener("click", () => changeColor());
const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", () => erase());
const title = document.getElementsByClassName("header")[0];

let color = "#000000";
let numTiles = slider.value;
let tileSize = GRID_SIZE / numTiles;

initGUI();

function initGUI() {
  grid.innerHTML = "";
  sliderLabel.textContent = slider.value;

  numTiles = slider.value;
  tileSize = GRID_SIZE / numTiles;

  createTiles(numTiles ** 2);
}

function createTiles(num) {
  for (let i = 0; i < num; ++i) {
    const tile = document.createElement("div");
    tile.style.width = `${tileSize}px`;
    tile.style.height = `${tileSize}px`;
    tile.addEventListener("mouseenter", () => draw(tile));
    grid.appendChild(tile);
  }
}

function draw(tile) {
  console.log(color);
  tile.style.backgroundColor = color;
}

function erase() {
  const tiles = document
    .getElementsByClassName("grid")[0]
    .getElementsByTagName("div");

  for (const tile of tiles) {
    tile.style.backgroundColor = "white";
  }
}

function changeColor() {
  let redValue = Number(document.getElementById("rgb-red").value);
  let greenValue = Number(document.getElementById("rgb-green").value);
  let blueValue = Number(document.getElementById("rgb-blue").value);

  if (
    Number.isNaN(redValue) ||
    Number.isNaN(greenValue) ||
    Number.isNaN(blueValue) ||
    redValue < -1 ||
    redValue > 255 ||
    greenValue < -1 ||
    greenValue > 255 ||
    blueValue < -1 ||
    blueValue > 255
  ) {
    title.style.color = black;
    color = "#000000";
    return;
  }

  // Translate RGB to HEX
  let r1 = redValue / 16;
  let r2 = (r1 % 1) * 16;

  let g1 = greenValue / 16;
  let g2 = (g1 % 1) * 16;

  let b1 = blueValue / 16;
  let b2 = (b1 % 1) * 16;

  r1 = Math.floor(r1);
  g1 = Math.floor(g1);
  b1 = Math.floor(b1);

  let rgb = [r1, r2, g1, g2, b1, b2];

  for (let i = 0; i < rgb.length; ++i) {
    if (rgb[i] == 10) {
      rgb[i] = "A";
    } else if (rgb[i] == 11) {
      rgb[i] = "B";
    } else if (rgb[i] == 12) {
      rgb[i] = "C";
    } else if (rgb[i] == 13) {
      rgb[i] = "D";
    } else if (rgb[i] == 14) {
      rgb[i] = "E";
    } else if (rgb[i] == 15) {
      rgb[i] = "F";
    }
    console.log(typeof rgb[i]);
  }

  color = `#${rgb[0]}${rgb[1]}${rgb[2]}${rgb[3]}${rgb[4]}${rgb[5]}`;
  title.style.color = color;
}
