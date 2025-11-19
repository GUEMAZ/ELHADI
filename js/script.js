AOS.init({
  duration: 1200,
  once: true
});

const cards = document.querySelectorAll('.cert-card');
let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) card.classList.add('active');
  });
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

showCard(current);
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});