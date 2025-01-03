// Toggle Menu open and close
const menuTrigger = document.querySelector('.menu-trigger');
const menuContainer = document.querySelector('.menu-container');

menuTrigger.addEventListener('click', function() {
  menuContainer.classList.toggle('open');
});
