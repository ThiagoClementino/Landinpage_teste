// Carrossel de Carros JavaScript
class CarrousselCars {
  constructor() {
    this.currentSlide = 0;
    this.cardsPerView = 4; // Exibir 4 cards por vez
    this.cards = document.querySelectorAll(".cardCarroussel");
    this.totalCards = this.cards.length;
    this.maxSlides = Math.ceil(this.totalCards / this.cardsPerView);
    this.cardsContainer = document.querySelector(".cardsCarroussel");
    this.prevBtn = document.getElementById("carrousselPrevBtn");
    this.nextBtn = document.getElementById("carrousselNextBtn");

    this.init();
  }

  init() {
    // Verificar se os elementos existem
    if (!this.cardsContainer || !this.prevBtn || !this.nextBtn) {
      console.log("Elementos do carrossel não encontrados");
      return;
    }

    // Event listeners para os botões
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    // Configurar layout inicial
    this.setupCarousel();
    this.updateSlide();
  }

  setupCarousel() {
    // Configurar o container dos cards
    this.cardsContainer.style.display = "flex";
    this.cardsContainer.style.transition = "transform 0.3s ease";
    this.cardsContainer.style.width = `${
      (this.totalCards / this.cardsPerView) * 100
    }%`;

    // Configurar cada card
    this.cards.forEach((card) => {
      card.style.flex = `0 0 ${100 / this.totalCards}%`;
      card.style.minWidth = `${100 / this.totalCards}%`;
    });
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Voltar ao início
    }
    this.updateSlide();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.maxSlides - 1; // Ir para o final
    }
    this.updateSlide();
  }

  updateSlide() {
    // Calcular o deslocamento
    const translateX = -(this.currentSlide * (100 / this.maxSlides));
    this.cardsContainer.style.transform = `translateX(${translateX}%)`;

    // Atualizar estado dos botões
    this.updateButtons();
  }

  updateButtons() {
    // Opcional: desabilitar botões nos extremos
    if (this.currentSlide === 0) {
      this.prevBtn.style.opacity = "0.5";
    } else {
      this.prevBtn.style.opacity = "1";
    }

    if (this.currentSlide === this.maxSlides - 1) {
      this.nextBtn.style.opacity = "0.5";
    } else {
      this.nextBtn.style.opacity = "1";
    }
  }
}

// Inicializar carrossel quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new CarrousselCars();
});
