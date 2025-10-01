// Inicia o carrossel com pausa ao passar o mouse
const hero = document.querySelector('#heroCarousel');
if(hero){
  const carousel = new bootstrap.Carousel(hero, { 
    interval: 5000, 
    ride: 'carousel', 
    pause: 'hover' 
  });
}

