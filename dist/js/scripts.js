  
// MENU
// =================================

// On cible les éléments à modifier
var hamburger = document.querySelector(".header__nav-toggle");
var header    = document.querySelector(".header");
var page      = document.documentElement;


// La fonction permettant de basculer l'affichage en ajoutant/supprimant des classes
function doToggle() {
  header.classList.toggle('menu--open');
  page.classList.toggle('noscroll');
}

// La fonction doToggle() est appelé lorsqu'on clique sur l'icone de menu
hamburger.addEventListener('click', doToggle);


