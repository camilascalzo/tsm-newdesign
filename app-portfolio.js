//MODAL

const openCarouselBtn = document.querySelectorAll(".watch-btn");
const openCarouselBtnArr = Array.from(openCarouselBtn).entries();
const closeModalBtn = document.querySelectorAll(".close-portfolio-carousel");
const closeModalBtnArr = Array.from(closeModalBtn).entries();
const modalVideo = document.getElementsByClassName("modal-portfolio-carousel");
const nextBtn = document.querySelectorAll(".btn-next").forEach(item => { item.addEventListener("click", changeSlideNext)});

let sliderArr;
let currentSlide;
let nextSlide;

for (let [index, open] of openCarouselBtnArr) {
	const openModal = function (e) {
		e.preventDefault();
		modalVideo[index].style.display = "block";
		slide = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
		slideArr = Array.from(slide);
	};
	open.addEventListener("click", openModal);
}

for (let [index, close] of closeModalBtnArr) {
	const closeModal = function (e) {
		e.preventDefault();
		stopVideo();
		modalVideo[index].style.display = "none";
	};
	close.addEventListener("click", closeModal);
}

function stopVideo() {
	const video = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe.show");
	const videoArr = Array.from(video);

	if (videoArr) {
		for (i = 0; i < videoArr.length; i++) {
			let videoSrc = video[i].src;
			video[i].src = videoSrc;
		}
	}
}

function changeSlideNext(e) {
	if (!currentSlide) {
		nextSlide = 1
		currentSlide = 0
	} else if (nextSlide >= slideArr.length - 1) {
		nextSlide = 0
	} else {
		nextSlide++;
	}
	stopVideo();

	if (slideArr[nextSlide].classList.contains("hide")) {
		slideArr[nextSlide].classList.replace("hide", "show");
	}

	if (slideArr[currentSlide].classList.contains("show")) {
		slideArr[currentSlide].classList.replace("show", "hide");
	}

	currentSlide = nextSlide
	e.preventDefault();
}

