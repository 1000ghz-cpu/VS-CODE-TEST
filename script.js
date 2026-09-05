const square = document.getElementById('square');
const growButton = document.getElementById('growButton');
const resetButton = document.getElementById('resetButton');
const sizeLabel = document.getElementById('sizeLabel');

let size = 100;
let rotation = 0;

growButton.addEventListener('click', () => {
  size += 20;
  rotation += 15;
  square.style.width = size + 'px';
  square.style.height = size + 'px';
  square.style.transform = 'rotate(' + rotation + 'deg)';
  sizeLabel.textContent = 'Size: ' + size + 'px';
});

resetButton.addEventListener('click', () => {
  size = 100;
  rotation = 0;
  square.style.width = size + 'px';
  square.style.height = size + 'px';
  square.style.transform = 'rotate(' + rotation + 'deg)';
  sizeLabel.textContent = 'Size: ' + size + 'px';
});
