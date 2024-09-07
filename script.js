const next = document.querySelector('#next');
const prev = document.querySelector('#prev');



function handleScrollNext() {
  const cards = document.querySelector('.card-content');
  const scrollAmount = window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
  
  cards.scrollBy({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth' // เพิ่ม behavior เพื่อให้การเลื่อนไหลลื่น
  });
}

function handleScrollPrev() {
  const cards = document.querySelector('.card-content');
  const scrollAmount = window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;

  cards.scrollBy({
    top: 0,
    left: -scrollAmount,
    behavior: 'smooth' // เพิ่ม behavior เพื่อให้การเลื่อนไหลลื่น
  });
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);
