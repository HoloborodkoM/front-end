const tableSize = 6;
const variant = 3;
let value = 0;

const colorPicker = document.querySelector('#color-picker');
const getTableElement = document.querySelector('#table-six-x-six');

for (let i = 0; i < tableSize; i++) {
   
   const tableRow = document.createElement('tr');
   getTableElement.append(tableRow);

   for (let j = 0; j < tableSize; j++){

      ++value;
      const tableCell = document.createElement('td');
      tableCell.textContent = value;
      tableCell.id = `cell-${value}`;
      tableRow.append(tableCell);

   }
}

const getRandomColor = () => {
   const possibleLetters = '0123456789ABCDEF';
   let color = '#';

   for (let i = 0; i < 6; i++) {
      color += possibleLetters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const variantCell = document.querySelector(`#cell-${variant}`);

const changeColor = (cell, isColorPicked = false, isDbClick = false) => {
   const clickColor = colorPicker.value;
   if (isColorPicked) {
      cell.style.backgroundColor = clickColor;
      if (isDbClick) {
         colorMainDiagonal(clickColor);
      }
   } else {
      cell.style.backgroundColor = getRandomColor();
   }
}

const colorMainDiagonal = (color) => {
   let tempValue = 0;
   let position = 1;

   for (let i = 0; i < tableSize; i++) {

      const neededCell = tempValue + position;
      document.querySelector(`#cell-${neededCell}`).style.backgroundColor = color;
      
      for (let j = 0; j < tableSize; j++){
         tempValue++;
      }
      position++;
   }
}