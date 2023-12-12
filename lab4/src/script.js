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

const variabilityButtons = document.createElement('div');
variabilityButtons.id = 'buttons';
document.body.append(variabilityButtons);

const buttonAddImage = document.createElement('button');
buttonAddImage.id = 'add-image';
buttonAddImage.textContent = 'Додати';
variabilityButtons.append(buttonAddImage);

const buttonIncreaseImage = document.createElement('button');
buttonIncreaseImage.id = 'increase-image';
buttonIncreaseImage.textContent = 'Збільшити';
variabilityButtons.append(buttonIncreaseImage);

const buttonReduceImage = document.createElement('button');
buttonReduceImage.id = 'reduce-image';
buttonReduceImage.textContent = 'Зменшити';
variabilityButtons.append(buttonReduceImage);

const buttonDeleteImage = document.createElement('button');
buttonDeleteImage.id = 'delete-image';
buttonDeleteImage.textContent = 'Видалити';
variabilityButtons.append(buttonDeleteImage);

const imgElement = document.querySelector('#img-container');

const addImage = () => {
   const newImg = document.createElement('img');
   newImg.src = 'img/Odesa.jpg';
   newImg.alt = 'тут повинно бути фото';
   imgElement.append(newImg);
}

const increaseImage = () => {
   const lastImg = imgElement.lastElementChild;
   const lastImgWidth = lastImg.width;
   lastImg.style.width = (lastImgWidth * 1.05) + 'px';
}

const reduceImage = () => {
   const lastImg = imgElement.lastElementChild;
   const lastImgWidth = lastImg.width;
   lastImg.style.width = (lastImgWidth * 0.95) + 'px';
}

const deleteImage = () => {
   const lastImg = imgElement.lastElementChild;
   lastImg.remove();
}

buttonAddImage.addEventListener('click', addImage);
buttonIncreaseImage.addEventListener('click', increaseImage);
buttonReduceImage.addEventListener('click', reduceImage);
buttonDeleteImage.addEventListener('click', deleteImage);