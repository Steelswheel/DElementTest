const button = document.querySelector('.work__button');
const modal = document.querySelector('.modal');

button.onclick = (event) => {
  modal.style.display = "block";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const form = document.querySelector('.form');
const submit = form.querySelector('.form__button');
const fields = form.querySelectorAll('.field');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  fields.forEach((item) => {
      item.value.trim().toString();
      if (!item.value) {
        item.value = 'Please fill this field';
        item.innerHTML.color = "red";
        setTimeout(() => item.value = null, 2000);
      }
    })
});
