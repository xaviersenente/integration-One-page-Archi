  
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


// CAROUSEL PROJETS
// =================================

let carouselFkty = document.querySelector('.carouselFkty');
let arrows = document.querySelector('.projects__arrows');

// Init
let flkty = new Flickity( carouselFkty, {
  prevNextButtons: false,
  pageDots: false,
  cellAlign: "left", 
  contain: true
});

// previous
let previousButton = arrows.querySelector('.arrows__item--prev');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});

// next
let nextButton = arrows.querySelector('.arrows__item--next');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});

// Pour améliorer l'accessibilité sur le carousel
document.querySelectorAll('[aria-hidden="true"]').forEach(item => {
  item.removeAttribute('aria-hidden');
});

// Pour afficher la grille
// =================================

var btnGrid = document.querySelector(".btnGrid");
var body    = document.querySelector("body");

function showGrid() {
  body.classList.toggle('show');
  if (btnGrid.textContent === "Afficher la grille") {
    btnGrid.textContent = "Masquer la grille";
  } else {
    btnGrid.textContent = "Afficher la grille";
  }
}
btnGrid.addEventListener('click', showGrid);

