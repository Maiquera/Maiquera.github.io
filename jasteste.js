// Selecionando os elementos necessários
const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variáveis para controlar o carrossel
let currentSlide = 0;
let slideInterval;

// Função para mostrar um slide específico
function showSlide(n) {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    indicators[index].classList.remove('active');
  });
  cards[n].classList.add('active');
  indicators[n].classList.add('active');
  currentSlide = n;
}

// Função para iniciar o carrossel automaticamente
function startSlideShow() {
  slideInterval = setInterval(() => {
    showSlide((currentSlide + 1) % cards.length);
  }, 3000); // Ajuste o intervalo de tempo entre as transições
}

// Função para pausar o carrossel
function pauseSlideShow() {
  clearInterval(slideInterval);
}

// Função para lidar com os cliques nos indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    pauseSlideShow(); // Pausar o carrossel ao clicar em um indicador
  });
});

// Função para navegar para o próximo slide
nextButton.addEventListener('click', () => {
  showSlide((currentSlide + 1) % cards.length);
});

// Função para navegar para o slide anterior
prevButton.addEventListener('click', () => {
  showSlide((currentSlide - 1 + cards.length) % cards.length);
});

// Iniciar o carrossel
startSlideShow();