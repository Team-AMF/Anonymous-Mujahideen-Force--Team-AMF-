document.querySelector('.menu-trigger').addEventListener('click', function() {
  const menu = document.querySelector('.menu-container');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
