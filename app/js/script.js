const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
console.log('hello')

btnHamburger.addEventListener('click', function(){
	console.log('click hamburger');
	if(header.classList.contains('open')){
		body.classList.remove('noscroll');
		header.classList.remove('open')
		fadeElems.forEach(function(element){
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} 
	else {
		body.classList.add('noscroll')
		header.classList.add('open')
		fadeElems.forEach(function(element){
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

//jQuery

//auto slideshow
$('#slider .slider__slides').animate({'margin-left': -720}, 1000)

var stopSlideshow = false;
function slideShow(caller){
	var status = $(caller).attr('value');
	if (status.indexOf('Start') > - 1){
		stopSlideshow = false;
		$(caller).attr('value', 'Stop Slideshow');
	} else{
		stopSlideshow = true;
		$(caller).attr('value', 'Start Slideshow');
	}
	
	var interval = setInterval(function(){
		if(!stopSlideshow)
			changeSlide('next')
		else	
			clearInterval(interval)
	}, 2000);
}

//manual slide show
function changeSlide(direction){
	var currentImg = $('.active')
	var nextImg = currentImg.next();
	var previousImg = currentImg.prev();

	if (direction == 'next'){
		if(nextImg.length)
		nextImg.addClass('active');
		else
			$('.slider__slides img').first().addClass('active')
	} else{
		if(previousImg.length)
		previousImg.addClass('active');
		else
			$('.slider__slides img').last().addClass('active')
	}
	currentImg.removeClass('active')
}

//1. MODAL : click event (login button) if click on then modal pop up
var modal = $('.modalBox');
$('.login').click(function() {
	modal.show();
});

$('.close').click(function() {
	modal.hide();
});