const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.review-slide'));
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function updateCarousel() {
 carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
 currentIndex = Math.max(currentIndex - 1, 0);
 updateCarousel();
});

nextButton.addEventListener('click', () => {
 currentIndex = Math.min(currentIndex + 1, slides.length - 1);
 updateCarousel();
});