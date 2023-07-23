function selectColor(event) {
  const selectedColor = document.querySelector('.color.selected');
  if (selectedColor) selectedColor.classList.remove('selected');
  const clickedColor = event.target;
  clickedColor.classList.add('selected');
}

function paintPixel(event) {
  const selectedColor = document.querySelector('.color.selected');
  const pixel = event.target;
  pixel.style.backgroundColor = selectedColor.style.backgroundColor;
}

function populateColorPalette() {
  const palette = document.getElementById('colors');

  const colors = ['black', 'white', 'red', 'green', 'blue'];

  for (let i = 0; i < colors.length; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.style.backgroundColor = colors[i];
    color.addEventListener('click', selectColor);
    palette.appendChild(color);
  }
  const firstColor = palette.querySelector('.color');
  firstColor.classList.add('selected');
}

function populatePixelBoard(size) {
  const board = document.getElementById('pixel-board');

  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size}, 42px)`;
  board.style.gridTemplateRows = `repeat(${size}, 42px)`;

  for (let i = 0; i < size * size; i += 1) {
    const pixel = document.createElement('div');
    pixel.style.backgroundColor = 'white';
    pixel.classList.add('pixel');
    pixel.style.border = 'solid 1px black';
    pixel.addEventListener('click', paintPixel);
    board.appendChild(pixel);
  }
}

function generateRandomColor() {
  const characters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomizeColors() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    let newColor = generateRandomColor();
    if (i === 0) newColor = 'black';
    if (i === 1) newColor = 'white';
    colors[i].style.backgroundColor = newColor;
  }
}

function customColor() {
  const colorInput = document.getElementById('input-custom-color');
  const palette = document.getElementById('colors');

  function handleColorInput() {
    const chosenColor = colorInput.value;
    const newColor = document.createElement('div');
    newColor.classList.add('color');
    newColor.addEventListener('click', selectColor);
    newColor.style.backgroundColor = chosenColor;
    palette.appendChild(newColor);
  }

  colorInput.addEventListener('input', handleColorInput);
}

const buttonRandomColor = document.getElementById('button-random-color');
buttonRandomColor.addEventListener('click', randomizeColors);

window.addEventListener('load', () => {
  populateColorPalette();
  customColor();
  populatePixelBoard(5);
});
