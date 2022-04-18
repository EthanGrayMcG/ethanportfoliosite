/* Description: Custom JS file */


/* For Back To Top Button */
window.onscroll = function () {
	scrollFunctionBTT(); // back to top button
};


/* Image Slider 1 - Swiper */
var imageSlider = new Swiper('.image-slider-1', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 60,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 575px
		575: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 40
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 50
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 60
		},
	}
});


/* Image Slider 2 - Swiper */
var imageSlider2 = new Swiper('.image-slider-2', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


/* Video Modal */
var videoBtn = document.querySelector('.video-btn')
var videoModal = document.getElementById('videoModal')
var video = document.getElementById('video')
var videoSrc

var checkVideoSrc = document.querySelector('.video-btn');
if (checkVideoSrc !== null) { 
	videoBtn.addEventListener('click',function(e){
		videoSrc = videoBtn.getAttribute('data-bs-src')
	})
}

var checkVideoModal = document.getElementById('videoModal');
if (checkVideoModal !== null) { 
	videoModal.addEventListener('shown.bs.modal',(e)=>{
		video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
	})

	videoModal.addEventListener('hide.bs.modal',(e)=>{
		video.setAttribute('src', videoSrc)
	})
}


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}