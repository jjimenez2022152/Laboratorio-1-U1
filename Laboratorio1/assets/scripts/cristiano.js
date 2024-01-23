let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slider-content');
    const totalSlides = document.querySelectorAll('.slider-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const transformValue = -100 * currentIndex + '%';
    slides.style.transform = `translateX(${transformValue})`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
