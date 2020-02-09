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
