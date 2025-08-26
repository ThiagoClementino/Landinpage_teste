// Carrossel de Cards JavaScript
class CardsCarroussel {
  constructor() {
    this.currentSlide = 0;
    this.cardsPerView = 4; // Exibir 4 cards por vez
    this.cards = document.querySelectorAll(".cardCarroussel");
    this.totalCards = this.cards.length;
    // O maxSlides deve ser o número de 'passos' que o carrossel pode dar.
    // Se temos 7 cards e exibimos 4, temos 3 cards 'escondidos' que podem ser rolados.
    // Então, o maxSlides é 7 - 4 = 3.
    this.maxSlides = this.totalCards - this.cardsPerView;
    this.cardsContainer = document.querySelector(".cardsCarroussel");
    this.prevBtn = document.getElementById("cardsCarrousselPrevBtn");
    this.nextBtn = document.getElementById("cardsCarrousselNextBtn");

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
    // Configurar o container dos cards para exibir em linha horizontal
    this.cardsContainer.style.display = "flex";
    this.cardsContainer.style.transition = "transform 0.3s ease";
    this.cardsContainer.style.flexWrap = "nowrap";
    // A largura do container interno deve ser a soma das larguras dos cards
    // Cada card terá 100% / cardsPerView da largura visível do container externo
    // Multiplicamos pelo total de cards para ter a largura total do conteúdo
    this.cardsContainer.style.width = `${
      (this.totalCards / this.cardsPerView) * 100
    }%`;

    // Configurar cada card para ocupar espaço igual dentro do container interno
    this.cards.forEach((card) => {
      card.style.flex = `0 0 ${100 / this.totalCards}%`; // Cada card ocupa 1/totalCards da largura total do container interno
      card.style.minWidth = `${100 / this.totalCards}%`;
    });
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides) {
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
      this.currentSlide = this.maxSlides; // Ir para o final
    }
    this.updateSlide();
  }

  updateSlide() {
    // Calcular o deslocamento baseado no card atual
    // O deslocamento é baseado na largura de um card (100% / cardsPerView) * currentSlide
    const translateX = -(this.currentSlide * (100 / this.cardsPerView));
    this.cardsContainer.style.transform = `translateX(${translateX}%)`;

    // Atualizar estado dos botões
    this.updateButtons();
  }

  updateButtons() {
    // Atualizar opacidade dos botões baseado na posição
    if (this.currentSlide === 0) {
      this.prevBtn.style.opacity = "0.5";
    } else {
      this.prevBtn.style.opacity = "1";
    }

    if (this.currentSlide === this.maxSlides) {
      this.nextBtn.style.opacity = "0.5";
    } else {
      this.nextBtn.style.opacity = "1";
    }
  }
}

// Inicializar carrossel quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  new CardsCarroussel();
});
