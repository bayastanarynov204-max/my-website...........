
document.addEventListener('DOMContentLoaded', () => {

  const burger = document.getElementById('burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
  }

  const buttons = document.querySelectorAll('#filter button');
  const cards = document.querySelectorAll('#programGrid .card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? 'block' : 'none';
      });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
      }
    });
  });
  console.log('SPORT ZAL site loaded. WhatsApp: 0227 975 897');
});
