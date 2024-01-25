document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(-50px)';
      section.style.transition = 'opacity 1s ease, transform 1s ease';
    });
  
    window.setTimeout(function() {
      sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      });
    }, 600); 
  });
  