const getFirstElement = document.getElementById('first-element');
const getSecondElement = document.querySelector('#second-element');

const getRandomColor = () => {
   const possibleLetters = '0123456789ABCDEF';
   let color = '#';

   for(let i = 0; i < 6; i++) {
      color += possibleLetters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const changeColor = (element) => {
   const changedBackgroundColor = getRandomColor();
   const changedTextColor = getRandomColor();
   element.style.backgroundColor = changedBackgroundColor;
   element.style.color = changedTextColor;
}

getFirstElement.onclick = () => changeColor(getFirstElement);
getSecondElement.onclick = () => changeColor(getSecondElement);