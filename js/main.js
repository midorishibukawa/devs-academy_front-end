const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const closeMenuBtn = document.getElementById('close-menu');

function menuToggle() {
    menu.classList.toggle('active');
    closeMenuBtn.classList.toggle('active');
    closeMenuBtn.classList.toggle('inactive');
}

hamburger.onclick = menuToggle;
closeMenuBtn.onclick = menuToggle;

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);