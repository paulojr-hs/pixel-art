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

window.addEventListener('load', () => {
  populateColorPalette();
});
