    function scrollCarousel(id, direction) {
    const carousel = document.getElementById(id).querySelector('.carousel-track');
    const cardWidth = carousel.querySelector('.news-card').offsetWidth + 16; 
    const style = window.getComputedStyle(carousel);
    const matrix = new WebKitCSSMatrix(style.transform);
    let currentX = matrix.m41; 
    if (isNaN(currentX)) currentX = 0;

    const newX = currentX - direction * cardWidth; 

    const maxScroll = -(carousel.scrollWidth - carousel.parentElement.offsetWidth);

    
    const finalX = Math.max(Math.min(newX, 0), maxScroll);

    carousel.style.transform = `translateX(${finalX}px)`;
  }