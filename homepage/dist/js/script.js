const button = document.querySelector('.work__button');
const modal = document.querySelector('.modal');
const popup = document.querySelector('.popup');
const closer = popup.querySelector('.popup__close');
const form = document.querySelector('.modal__form');
const submit = form.querySelector('.form__button');
const fields = form.querySelectorAll('.field');


closer.onclick = (event) => {
  modal.style.display = "none";
}

button.onclick = (event) => {
  modal.style.display = "block";
  form.style.display = "block";
  popup.style.display = 'none';

  fields.forEach((item) => {
      item.value = null;
  })
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let errors = document.querySelectorAll('.error');

  errors.forEach((item) => {
    item.remove();
  });

  fields.forEach((item) => {
      item.value.trim().toString();
      if (!item.value) {
        let err = document.createElement('span');
        err.className = 'error';
        err.innerHTML = "Empty!"
        err.style.color = 'red';
        item.after(err);
        setTimeout(() => err.remove(), 2000);
      } else {
          const data = [];
          fields.forEach((item) => {
            data.push(item.value);
          });

          let response = fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(response => response.json());

          if (response) {
            form.style.display = "none";
            popup.style.display = "block";
          }
      }
    });
});
