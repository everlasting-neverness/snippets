const menu = document.querySelector('#menu');
const subItemsList = document.querySelector('.dropdown');


function dropdownMenu() {
  subItemsList.classList.toggle('active');
}

menu.addEventListener('mouseenter', dropdownMenu);
menu.addEventListener('mouseleave', dropdownMenu);
