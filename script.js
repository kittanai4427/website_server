const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

function handleScrollNext() {
  const cards = document.querySelector('.card-content');
  const cardWidth = cards.querySelector('.card').offsetWidth + 20; // ความกว้างของการ์ดรวม gap
  const maxScrollLeft = cards.scrollWidth - cards.clientWidth; // ค่าการเลื่อนสูงสุด
  
  // ตรวจสอบและปรับให้เลื่อนไปจนสุดถ้าจำเป็น
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
  const cardWidth = cards.querySelector('.card').offsetWidth + 20; // ความกว้างของการ์ดรวม gap
  
  // ตรวจสอบว่าหลังจากเลื่อนแล้วจะเลื่อนน้อยกว่าศูนย์หรือไม่
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
