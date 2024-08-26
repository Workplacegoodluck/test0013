document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});


function freezePage() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
  }
  
  function unfreezePage() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.documentElement.style.height = '';
    document.body.style.height = '';
  }
  
