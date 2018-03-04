let carousel = document.querySelector('.carousel');
let stage = document.querySelector('.carousel-stage');
let prev = document.querySelector('.carousel-prev');
let next = document.querySelector('.carousel-next');
let slide = document.querySelectorAll('.single-slide');
console.log(slide);

let slideWidth = slide[0].clientWidth;
console.log(slideWidth);

let currentIndex = 0;
let slideNumber = slide.length - 1;


function goToSlide(index) {
    console.log(index);
    if (index < 0) {
        index = slideNumber;
    } else if (index > slideNumber) {
        index = 0;
    }
    carousel.style.left = index * (-slideWidth);
    currentIndex = index;
}

function slideToNext() {
    goToSlide(currentIndex + 1);
}

function slideToPrev() {
    goToSlide(currentIndex - 1);
}

function bindEvents() {
    prev.addEventListener('click', slideToPrev);
    next.addEventListener('click', slideToNext);
}

function autorotate() {
    setInterval(slideToNext, 2000);
}

bindEvents()

autorotate()

