document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Cambia el slide cada 3 segundos (ajusta según tus necesidades)
  showSlide(currentSlide);
});
