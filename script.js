const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

function handleScrollNext() {
  const cards = document.querySelector('.card-content');
  const cardWidth = cards.querySelector('.card').offsetWidth + 20; 
  const maxScrollLeft = cards.scrollWidth - cards.clientWidth; 
  

  if (cards.scrollLeft + cardWidth >= maxScrollLeft) {
    cards.scrollTo({
      top: 0,
      left: maxScrollLeft,
      behavior: 'smooth'
    });
  } else {
    cards.scrollBy({
      top: 0,
      left: cardWidth,
      behavior: 'smooth'
    });
  }
}

function handleScrollPrev() {
  const cards = document.querySelector('.card-content');
  const cardWidth = cards.querySelector('.card').offsetWidth + 20; 
  

  if (cards.scrollLeft - cardWidth <= 0) {
    cards.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    cards.scrollBy({
      top: 0,
      left: -cardWidth,
      behavior: 'smooth'
    });
  }
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);
