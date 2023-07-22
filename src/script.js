function populateColorPalette() {
  const palette = document.getElementById('colors');

  const colors = ['black', 'white', 'red', 'green', 'blue'];

  for (let i = 0; i < colors.length; i += 1) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.style.backgroundColor = colors[i];
    palette.appendChild(color);
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

const buttonRandomColor = document.getElementById('button-random-color');
buttonRandomColor.addEventListener('click', randomizeColors);

window.addEventListener('load', () => {
  populateColorPalette();
});
