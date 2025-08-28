// Navigation scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.floating-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Animation des barres de compétences
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}

// Gestionnaire d'animations au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Si c'est la section des compétences, animer les barres
      if (entry.target.id === 'skills') {
        animateSkills();
      }
    }
  });
}, {
  threshold: 0.1
});

// Observer les sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Animation du formulaire de contact
