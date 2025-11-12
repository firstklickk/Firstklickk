// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn){
  menuBtn.addEventListener('click', ()=>{
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });
}
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({top: el.offsetTop - 60, behavior:'smooth'});
  });
});
// Floating hero image
const img = document.querySelector('.hero-media img');
if (img){
  let dir = 1;
  setInterval(()=> {
    img.style.transform = `translateY(${dir * 6}px)`;
    dir = -dir;
  }, 3000);
}
