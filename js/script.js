// ============================================
//   KEROLES EHAB — Portfolio JavaScript
// ============================================

// ── Hamburger Menu ──
const menuBtn  = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('mobile-menu-open');
  if (isOpen) {
    closeMenu();
  } else {
    mobileMenu.classList.remove('mobile-menu-closed');
    mobileMenu.classList.add('mobile-menu-open');
    menuBtn.classList.add('menu-open');
  }
});

function closeMenu() {
  mobileMenu.classList.remove('mobile-menu-open');
  mobileMenu.classList.add('mobile-menu-closed');
  menuBtn.classList.remove('menu-open');
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});


const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 70);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));


// ── Active Nav Link on Scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color  = '';
    link.style.opacity = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color   = 'var(--gold)';
      link.style.opacity = '1';
    }
  });
});
