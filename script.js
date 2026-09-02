const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const quotes = [...document.querySelectorAll('.quotes blockquote')];
let quoteIndex = 0;
function showQuote(next) {
  quotes[quoteIndex].classList.remove('active');
  quoteIndex = (next + quotes.length) % quotes.length;
  quotes[quoteIndex].classList.add('active');
}
document.querySelector('.next').addEventListener('click', () => showQuote(quoteIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showQuote(quoteIndex - 1));
document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([{opacity:0, transform:'translateY(24px)'},{opacity:1, transform:'translateY(0)'}], {duration:700, easing:'cubic-bezier(.2,.8,.2,1)', fill:'both'});
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.15});
document.querySelectorAll('section:not(.hero) h2, .service-card, .proof-row, .quote-wrap').forEach(el => observer.observe(el));
