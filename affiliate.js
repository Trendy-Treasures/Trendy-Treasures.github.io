document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-to-top');

  scrollBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector('body');
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});
