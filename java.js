document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.menu');
    var navlinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      if (hamburger.classList.contains('active')) { // Check if hamburger has 'active' class
        hamburger.classList.remove('active');
        navlinks.classList.remove('nav-links--mobile', 'nav-links--mobile--fadeout');
      } else {
        hamburger.classList.add('active');
        navlinks.classList.add('nav-links--mobile');
        navlinks.classList.remove('nav-links--mobile--fadeout');
      }
    });
  });
  