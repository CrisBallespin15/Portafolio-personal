// menú en celular
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  const abierto = navLinks.classList.toggle('abierto');
  menuBtn.setAttribute('aria-expanded', abierto);
  menuBtn.textContent = abierto ? 'cerrar' : 'menú';
});

// cerrar el menú al tocar un link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('abierto');
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.textContent = 'menú';
  });
});

// las secciones aparecen cuando llegas a ellas
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.aparecer').forEach(el => observer.observe(el));

// año del footer
document.getElementById('year').textContent = new Date().getFullYear();
