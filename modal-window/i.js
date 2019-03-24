const modal = document.querySelector('.modal');
const but = document.querySelector('#mybtn');
const span = document.querySelector('.close');

function appear() {
  modal.style.display = 'block';
}

function close() {
  modal.style.display = "none";
}

but.addEventListener('click', appear);
span.addEventListener('click', close);
