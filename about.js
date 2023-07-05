//------------------------ Header and Logo Movement ---------------// 
window.addEventListener('scroll', function() {
  var logoContainer = document.querySelector('.logo-container');
  var scrollPosition = window.scrollY;
  var headerHeight = document.querySelector('header').offsetHeight;
  var header = document.querySelector('header');

  if (scrollPosition > headerHeight) {
    logoContainer.classList.add('enlarged');
  } else {
    logoContainer.classList.remove('enlarged');
  }

  if (window.pageYOffset > 50) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

});

  