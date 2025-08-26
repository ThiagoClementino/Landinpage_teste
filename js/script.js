// Carrossel JavaScript
class Carousel {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll(".carousel-slide");
    this.totalSlides = this.slides.length;
    this.track = document.getElementById("carouselTrack");
    this.indicators = document.querySelectorAll(".indicator");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");

    this.init();
  }

  init() {
    // Event listeners para os botões
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Event listeners para os indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });

    // Auto-play opcional (descomentado se desejado)
    // this.startAutoPlay();

    // Inicializar primeiro slide
    this.updateSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlide();
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateSlide();
  }

  updateSlide() {
    // Atualizar slides
    this.slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === this.currentSlide) {
        slide.classList.add("active");
      }
    });

    // Mover o track
    const translateX = -this.currentSlide * 100;
    this.track.style.transform = `translateX(${translateX}%)`;

    // Atualizar indicadores
    this.indicators.forEach((indicator, index) => {
      indicator.classList.remove("active");
      if (index === this.currentSlide) {
        indicator.classList.add("active");
      }
    });
  }

  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Muda slide a cada 5 segundos
  }
}

// Inicializar carrossel quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});
