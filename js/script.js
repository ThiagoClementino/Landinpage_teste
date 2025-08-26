document.addEventListener("DOMContentLoaded", function () {
  // 1. Funcionalidade do Menu Hamburger para Mobile
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      // Alterna a classe 'active' para mostrar/esconder o menu
      mainNav.classList.toggle("active");

      // Atualiza o atributo aria-expanded para acessibilidade
      const isExpanded = mainNav.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  }

  // 2. Funcionalidade do Acordeão (FAQ)
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq-question");
    const answerDiv = item.querySelector(".faq-answer");
    const icon = questionButton.querySelector("i");

    questionButton.addEventListener("click", () => {
      const isExpanded =
        questionButton.getAttribute("aria-expanded") === "true";

      // Fecha todos os outros itens para ter apenas um aberto por vez
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".faq-question")
            .setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
          otherItem.querySelector("i").classList.remove("fa-minus");
          otherItem.querySelector("i").classList.add("fa-plus");
        }
      });

      // Abre ou fecha o item clicado
      if (isExpanded) {
        questionButton.setAttribute("aria-expanded", "false");
        answerDiv.style.maxHeight = null;
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      } else {
        questionButton.setAttribute("aria-expanded", "true");
        // Define a altura máxima para o conteúdo aparecer
        answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});
