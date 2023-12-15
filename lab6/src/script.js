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

   });
}

downloadButton.addEventListener('click', () => getUsers());