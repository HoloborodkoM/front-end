const formInputElements = {
   formName: document.getElementById('name'),
   formPhone: document.getElementById('phone'),
   formIdCard: document.getElementById('id-card'),
   formFaculty: document.getElementById('faculty'),
   formBirthDate: document.getElementById('birth-date'),
}

const ukrainianPattern = {
   capitalLetters: '[А-ЩЬЮЯҐЄІЇ]',
   smallLetters: '[а-щьюяґєії]',
}

const formRegularExpressions = {
   formNamePattern: new RegExp(
      `^` + 
      `(${ukrainianPattern.capitalLetters}|${ukrainianPattern.capitalLetters}${ukrainianPattern.smallLetters}+)` +
      ` ${ukrainianPattern.capitalLetters}\\.${ukrainianPattern.capitalLetters}\\.$`),
   formPhonePattern: new RegExp('^\\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$'),
   formIdCardPattern: new RegExp(`^${ukrainianPattern.capitalLetters}{2} №\\d{6}$`),
   formFacultyPattern: new RegExp(`^${ukrainianPattern.capitalLetters}{4}$`),
   formBirthDatePattern: new RegExp('^(0[1-9]|[12]\\d|3[01])\\.(0[1-9]|1[0-2])\\.(19[2-9]\\d|2[01]\\d{2})$'),
}

const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
   const fields = Object.keys(formInputElements);
   
   for (const element of fields) {
      let errorCounter = 0;

      basicStyles(element);
      const inputValue = formInputElements[element].value;

      if (!formRegularExpressions[`${element}Pattern`].test(inputValue)) {

         formInputElements[element].classList.remove('not-error-input');
         formInputElements[element].classList.add('error-input');
         document.getElementById(`${formInputElements[element].id}-error`).classList.remove('hidden-info');
         document.getElementById(`${formInputElements[element].id}-error`).classList.add('error');
         errorCounter++;

      }
   }

   if (errorCounter === 0) {
      const text =  'Введені дані\n'
                  + `ПІБ: ${formInputElements.formName.value}\n`
                  + `Телефон: ${formInputElements.formPhone.value}\n`
                  + `ID-card: ${formInputElements.formIdCard.value}\n`
                  + `Факультет: ${formInputElements.formFaculty.value}\n`
                  + `Дата народження: ${formInputElements.formBirthDate.value}`;
      setTimeout(() => alert(text), 10);
   }
})

const basicStyles = (element) => {
   formInputElements[element].classList.add('not-error-input');
   formInputElements[element].classList.remove('error-input');
   document.getElementById(`${formInputElements[element].id}-error`).classList.add('hidden-info'); 
   document.getElementById(`${formInputElements[element].id}-error`).classList.remove('error');
}