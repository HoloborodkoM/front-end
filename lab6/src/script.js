const downloadButton = document.getElementById('get-users-info');
const outputUsers = document.getElementById('output');
const requestInfo = document.querySelector('.hidden-info');

const getUsers = () => {

   requestInfo.classList.remove('hidden-info');
   let url = new URL('https://randomuser.me/api');
   url.searchParams.append('results', 5);

   fetch(url)
   .then(res => {
      if (res.ok) {
         requestInfo.textContent = "Успішне з'єднання! Дані отримано";
         return res.json();
      } else {
         requestInfo.textContent = "Упс... Щось пішло не так!";
         throw new Error('Fail request');
      }
   })
   .then(data => fillUsersInfo(data.results))
   .catch(error => {
      console.log(error);
   })
}

const fillUsersInfo = (users) => {

   users.forEach(user => {
      
      const userData = {
         userPicture: user.picture.large,
         userPhone: user.phone,
         userCoordinates: `ш."${user.location.coordinates.latitude}" та ` + 
                          `д."${user.location.coordinates.longitude}"`,
         userPostcode: user.location.postcode,
         userCountry: user.location.country,
      }

      const userElement = document.createElement('div');
      userElement.classList.add('user-info');
      outputUsers.append(userElement);

      const picture = document.createElement('img');
      picture.src = userData.userPicture;
      picture.alt = 'тут повинно бути фото';
      userElement.append(picture);

      const phone = document.createElement('p');
      phone.textContent = `Телефон: ${userData.userPhone}`;
      userElement.append(phone);

      const coordinates = document.createElement('p');
      coordinates.textContent = `Координати: ${userData.userCoordinates}`;
      userElement.append(coordinates);

      const postcode = document.createElement('p');
      postcode.textContent = `Поштовий індекс: ${userData.userPostcode}`;
      userElement.append(postcode);

      const country = document.createElement('p');
      country.textContent = `Країна: ${userData.userCountry}`;
      userElement.append(country);

   });
}

downloadButton.addEventListener('click', () => getUsers());