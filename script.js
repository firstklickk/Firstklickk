// Simple intersection observer to toggle "visible" on elements with .animate-up or .animate-fade
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // If you want one-time animations, unobserve:
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-up, .animate-fade').forEach(el => io.observe(el));

  // small helpers
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Optional: basic form success UX (prevent default for demo if using Formspree)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (ev) => {
      // If you want to perform AJAX or show a message instead of default redirect, handle here.
      // Keep default behavior for Formspree unless you'd like inline success message.
    });
  }
})();
