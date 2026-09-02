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

document.querySelectorAll('[data-year], #year').forEach(el => el.textContent = new Date().getFullYear());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate([{opacity:0, transform:'translateY(24px)'},{opacity:1, transform:'translateY(0)'}], {duration:700, easing:'cubic-bezier(.2,.8,.2,1)', fill:'both'});
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.15});
document.querySelectorAll('section:not(.hero) h2, .gateway-card, .detail-list article, .principles article, .review-grid blockquote').forEach(el => observer.observe(el));
