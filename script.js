/*animations*/
TweenMax.from(".img-wrapper", 3, {
	delay: 0,
	opacity: 0,
	x: -50,
	ease: Expo.easeInOut
});
TweenMax.from(".description", 3, {
	delay: 1.0,
	opacity: 0,
	y: -50,
	ease: Expo.easeInOut
});
TweenMax.from(".other", 3, {
	delay: 1.0,
	opacity: 0,
	y: 50,
	ease: Expo.easeInOut
});


/*image scrolling*/
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var words = document.getElementsByClassName("myDescriptions");
  
  if (n > slides.length) {
	  slideIndex = 1
  }
  else if (n < 1) {
	  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
	  words[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  words[slideIndex-1].style.display = "block";
} 


/*slider*/
$(document).ready(function(){
  $('#slideshow .slick').slick({
    autoplay: true,
	autoplaySpeed: 2000,
	speed: 2000,
	dots: true,
	arrows: false
  });
});


/*lightbox gallery*/
$(function() {
	const $gallery = $('.display-image a').simpleLightbox();
});


window.onload = fun = () => { 
	const t1 = TweenMax.fromTo('#circle1', 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 2, autoAlpha: 0, repeat: -1});
	const t2 = TweenMax.fromTo('#circle2', 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 2, autoAlpha: 0, repeat: -1, delay: 2});
	const t3 =  TweenMax.fromTo('#circle3', 6,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 2, autoAlpha: 0, repeat: -1, delay: 4});
}
