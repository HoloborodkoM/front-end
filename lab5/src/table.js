const tableSize = 6;
let value = 0;

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