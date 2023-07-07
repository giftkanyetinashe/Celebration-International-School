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





//------------------------- Slide Show J.S -------------------------------//
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 5000); 
}


$(document).ready(function() {
  $('.menu-icon').on('click', function() {
    $('.mobile-menu').slideToggle();
  });
});


