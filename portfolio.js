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
// Animation du formulaire de contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://votre-domaine.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      contactForm.reset();
    } else {
      alert(`Erreur: ${result.error}`);
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    alert('Une erreur est survenue lors de l\'envoi du message.');
  }
});

