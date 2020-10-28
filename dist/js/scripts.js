  
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



// CAROUSEL HEADER
// =================================


function Carousel(carousel) {

  carousel.classList.add('carousel')

  // global vars

  let slides = carousel.querySelectorAll('.carousel__item');

  // fonction autoplay

  function autoPlay() {
    // La méthode setTimeout() permet de définir un minuteur (timer) qui exécute une fonction après la fin du délai indiqué.
    let timeout = setTimeout(function () {
      carouselNext(carousel, false, true);
    }, 6000);
  };

  /**
   * Fonction pour switcher de slide
   * @param {Object} carousel - Le carousel auquel est attaché la fonction.
   * @param {number} index - Le numéro d'index de chaque slide.
   * @param {boolean} previous - Contrôle de l'orientation.
   * @param {boolean} auto - Contrôle du défilement automatique.
   */

  function carouselSwitch(carousel, index, previous, auto) {

    if (carousel.getAttribute('wait') === 'true') return;

    let activeSlide         = carousel.querySelector('.carousel__item--current'),
        activeSlideImage    = activeSlide.querySelector('.carousel__img-wrapper'),
        activeSlideElements = activeSlide.querySelectorAll('.carousel__infos > *');

    let newSlide            = eq.call(slides, index),
        newSlideImage       = newSlide.querySelector('.carousel__img-wrapper'),
        newSlideContent     = newSlide.querySelector('.carousel__infos'),
        newSlideElements    = newSlide.querySelectorAll('.carousel__infos > *');

    if (newSlide === activeSlide) return;

    let timeout = 0;
    // Suspend la minuterie identifiée par son numéro timer retournée par la méthode setTimeout()
    clearTimeout(timeout);

    carousel.setAttribute('wait', 'true');

    newSlide.classList.add('carousel__item--new');
    // activeSlide.classList.add('carousel__item--transition');
    
    gsap.to(activeSlideElements,
      { alpha: 0, 
        // y: -30, 
        ease: "expo.out", 
        duration: 1,
        delay: .3,
        stagger: 0.1
      }
    )
    if (!previous) {
      // next slide
      var newSlideImageLeft    = activeSlideImage.offsetWidth + 'px',
          activeSlideImageLeft = -activeSlideImage.offsetWidth * 0.25 + 'px';
    } else {
      // prev slide
      var newSlideImageLeft    = -activeSlideImage.offsetWidth + 'px',
          activeSlideImageLeft = activeSlideImage.offsetWidth * 0.25 + 'px';
    }

    newSlide.style.zIndex  = 2;

    gsap.set(newSlideImage, { x: newSlideImageLeft });
    
    gsap.to(activeSlideImage, {
      x: activeSlideImageLeft,
      ease: "expo.inOut",
      duration: 1.5
    });

    gsap.to(newSlideImage, {
      x: 0,
      opacity: 1,
      ease: "expo.inOut",
      duration: 1.5,
      onComplete: function () {

        // switch active class
        newSlide.classList.add('carousel__item--current');
        newSlide.classList.remove('carousel__item--new');
        activeSlide.classList.remove('carousel__item--current');
        newSlide.removeAttribute('style');

        // reset all styles
        newSlideImage.removeAttribute('style');
        activeSlideImage.removeAttribute('style');
        carousel.setAttribute('wait', 'false');

        if(newSlideContent) {
          newSlideContent.removeAttribute('style');
          newSlideElements[0].removeAttribute('style');
        }

        if (auto) {
          autoPlay()
        }
      }
    });

    gsap.fromTo(
      newSlideElements,
      { alpha: 0, y: 30 },
      { alpha: 1, 
        y: 0, 
        ease: "expo.out", 
        delay: .6,
        duration: 1,
        stagger: 0.2
      }
    );
  }

  /**
   * Fonction pour les boutons suivant / précédent
   * @param {Object} carousel - Le carousel auquel est attaché la fonction.
   * @param {boolean} previous - Contrôle de l'orientation.
   * @param {boolean} auto - Contrôle du défilement automatique.
   */

  function carouselNext(carousel, previous, auto) {

    let activeSlide = carousel.querySelector('.carousel__item--current');
    let newSlide = null;
    if (previous) {
      // renvoie le nœud (node) précédant immédiatement le nœud courant
      newSlide = activeSlide.previousElementSibling;
      // Retour à la fin du carousel
      if (!newSlide)
      newSlide = slides[slides.length - 1];
    } else {
      // renvoie le nœud (node) suivant immédiatement le nœud courant
      newSlide = activeSlide.nextElementSibling;
      // Retour au début du carousel
      if (!newSlide)
      newSlide = slides[0];
    }
    carouselSwitch(carousel, indexInParent(newSlide), previous, auto);

  }


  document.addEventListener("DOMContentLoaded", function () {

    for (let i = slides.length - 1; i >= 0; i--) {
      let slide = slides[i];
      slide.classList.add('is-loaded');
    };

    // arrows click event

    let arrows = document.querySelector('.carousel__arrows');

    if (arrows) {
      let next = arrows.querySelector('.arrows__item--next');
      let prev = arrows.querySelector('.arrows__item--prev');

      next.addEventListener('click', function (e) {
        carouselNext(carousel, false);
      });

      prev.addEventListener('click', function (e) {
        carouselNext(carousel, true);
      });
    }

    autoPlay(); // autoplay init

  });

};

Carousel(carousel);
