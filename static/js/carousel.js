const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const slideWidth = slides[0].getBoundingClientRect().width;

// Ubicar slides y marcar el actual
slides.forEach((slide, i) => slide.style.left = `${slideWidth * i}px`);
slides[0].classList.add('current-slide');

// Transición suave
track.style.transition = 'transform 0.5s ease-in-out';

const moveToSlide = (currentSlide, targetSlide) => {
  const targetLeft = parseFloat(targetSlide.style.left);
  track.style.transform = `translateX(-${targetLeft}px)`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  let prev = currentSlide.previousElementSibling;

  if (!prev || !prev.classList.contains('slide')) {
    prev = slides[slides.length - 1];
  }
  moveToSlide(track, currentSlide, prev);
});

nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  moveToSlide(currentSlide, nextSlide);
});
