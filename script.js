$(document).ready(function() {
	var animationTimeline = new TimelineMax({paused: true});
	var revealer = $('.revealer');
	
	var navigation = $('.navbar');
	var description = $('.description');
	var imgWrapper = $('.img-wrapper');
	
	var animationTime = 1;
	var easeOut = Expo.easeOut;
	
	animationTimeline.fromTo(revealer, animationTime,
	{scale: "0", opacity: 1},
	{scale: "300%", opacity: 1}
	).to(revealer, animationTime, {opacity:0, display:"none"})
	.add("end", 1.5)
	.fromTo(navigation, animationTime, {y:"-100%"}, {y:"0%", ease:easeOut}, "end")
	.fromTo(description, animationTime, {x:"-150%"}, {x:"0%", ease:easeOut}, "end")
	.fromTo(imgWrapper, animationTime, {y:"150%"}, {y:"0%", ease:easeOut}, "end")
	.to(imgWrapper, animationTime, {rotation:"25deg",  ease:easeOut})
	.to(imgWrapper, animationTime, {rotation:"-25deg", ease:easeOut})
	.to(imgWrapper, animationTime, {rotation:"0deg", ease:easeOut})
	;
	animationTimeline.play();
});

/*animations*/
TweenMax.from(".other", 3, {
	delay: 2.0,
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