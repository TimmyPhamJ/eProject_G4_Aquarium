(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
  jQuery('nav#dropdown').meanmenu();  
  
/*----------------------------
 Featured Product Carousel
------------------------------ */  
  $(".slider").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });


  $(".image-area").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:true,    
      items : 3,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  }); 

  $(".activities-text").owlCarousel({
    autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:false,    
      items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });

  $(".single-calender").owlCarousel({
      autoPlay: true, 
    slideSpeed:2000,
    pagination:true,
    navigation:true,    
      items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });
/*----------------------------
 header top hidden
------------------------------ */  
  $('.hidden-icon i').on('click', function () {
      $(".header-top .container , .header-top-hide-minus").slideToggle("slow");
      $(".header-top-hide-plus").slideToggle("slow");
  });
  /*$(".hidden-icon .fa-plus").click(function(){
      $(".hidden-icon .container , .header-top-hide-plus").slideToggle("slow");
      $(".header-top-hide-minus").slideToggle("slow");
  });*/
  
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

})(jQuery); 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#waterform").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});
