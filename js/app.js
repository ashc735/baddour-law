const slides = document.querySelectorAll('.review-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
   currentSlide = (currentSlide -1 + slides.length) % slides.length;
   showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);

const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();

yearSpan.innerText = currentYear.getFullYear();