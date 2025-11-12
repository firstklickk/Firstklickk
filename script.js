// Basic interactions: menu, smooth scroll, small hero float, contact UX

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('main-nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = this.getAttribute('href').slice(1);
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // close mobile nav
      if (window.innerWidth <= 900) nav.style.display = 'none';
    }
  });
});

// Gentle floating for hero image
(function heroFloat(){
  const img = document.querySelector('.hero-media img');
  if (!img) return;
  let dir = 1;
  setInterval(() => {
    img.style.transform = `translateY(${dir * 6}px)`;
    dir = -dir;
  }, 3000);
})();

// Contact form UX: disable button when submitting
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }
    // let the browser submit (Formspree or other)
  });
}