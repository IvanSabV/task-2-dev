var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var modalWindow = document.querySelector('.reg');
var regBtn = document.querySelector('.head__btn');
var closeBtn = document.querySelector('.close');

regBtn.onclick = function() {
  modalWindow.style.display = "block";
}

window.onclick = function() {
  modalWindow.style.display = "none";
}

closeBtn.onclick = function() {
  modalWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalWindow) {
      modalWindow.style.display = "none";
    }
}
