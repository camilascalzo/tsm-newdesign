//MODAL

const openCarouselBtn = document.querySelectorAll(".watch-btn");
const openCarouselBtnArr = Array.from(openCarouselBtn).entries();
const modalVideo = document.getElementsByClassName("modal-portfolio-carousel");
const closeModalBtn = document.querySelectorAll(".close-portfolio-carousel");
const closeModalBtnArr = Array.from(closeModalBtn).entries();
const nextSlideBtn = document.querySelectorAll(".next-slide-btn").forEach(item => { item.addEventListener("click", changeSlideNext) });
// const prevSlideBtn = document.querySelectorAll(".prev-slide-btn").forEach(item => {item.addEventListener("click", changeSlidePrev)});

var slide;
var sliderArr;
let currentSlide;
let nextSlide;


for (let [index, open] of openCarouselBtnArr) {
    const openModal = function (e) {

        modalVideo[index].style.display = "block";

        slide = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
        slideArr = Array.from(slide);

        e.preventDefault();
    };
    open.addEventListener("click", openModal);
}

for (let [index, close] of closeModalBtnArr) {
    const closeModal = function (e) {
        stopVideo();
        modalVideo[index].style.display = "none";

        e.preventDefault();
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

//--------------------
const btn1 = document.querySelectorAll(".btn-1").forEach(item => { item.addEventListener("click", changeVideo1)});
const btn2 = document.querySelectorAll(".btn-2").forEach(item => { item.addEventListener("click", changeVideo2)});
const btn3 = document.querySelectorAll(".btn-3").forEach(item => { item.addEventListener("click", changeVideo3)});
const btn4 = document.querySelectorAll(".btn-4").forEach(item => { item.addEventListener("click", changeVideo4)});
const btn5 = document.querySelectorAll(".btn-5").forEach(item => { item.addEventListener("click", changeVideo5)});
const btn6 = document.querySelectorAll(".btn-6").forEach(item => { item.addEventListener("click", changeVideo6)});


function changeVideo1(e) {

    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
        slideArrPrueba = Array.from(slidePrueba);

        console.log(slideArrPrueba);
        console.log(slideArrPrueba[0])

    if (slideArrPrueba[0].classList.contains("hide")) {
        slideArrPrueba[0].classList.replace("hide", "show");
    }

    if (slideArrPrueba[1].classList.contains("show")) {
        slideArrPrueba[1].classList.replace("show", "hide");
    } 

    if (slideArrPrueba[2].classList.contains("show")) {
        slideArrPrueba[2].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[3].classList.contains("show")) {
        slideArrPrueba[3].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[4].classList.contains("show")) {
        slideArrPrueba[4].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[5].classList.contains("show")) {
        slideArrPrueba[5].classList.replace("show", "hide");    
    }

    
    e.preventDefault();


}
function changeVideo2(e) {
    
    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
    slideArrPrueba = Array.from(slidePrueba);

    if (slideArrPrueba[1].classList.contains("hide")) {
        slideArrPrueba[1].classList.replace("hide", "show");
    }
    if (slideArrPrueba[2].classList.contains("show")) {
        slideArrPrueba[2].classList.replace("show", "hide");
    }
    if (slideArrPrueba[3].classList.contains("show")) {
        slideArrPrueba[3].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[4].classList.contains("show")) {
        slideArrPrueba[4].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[5].classList.contains("show")) {
        slideArrPrueba[5].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[0].classList.contains("show")) {
        slideArrPrueba[0].classList.replace("show", "hide");    
    }
    

    e.preventDefault();


}
function changeVideo3(e) {
    
    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
    slideArrPrueba = Array.from(slidePrueba);

    if (slideArrPrueba[2].classList.contains("hide")) {
        slideArrPrueba[2].classList.replace("hide", "show");
    }
    if (slideArrPrueba[3].classList.contains("show")) {
        slideArrPrueba[3].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[4].classList.contains("show")) {
        slideArrPrueba[4].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[5].classList.contains("show")) {
        slideArrPrueba[5].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[0].classList.contains("show")) {
        slideArrPrueba[0].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[1].classList.contains("show")) {
        slideArrPrueba[1].classList.replace("show", "hide");    
    }
    

    e.preventDefault();


}
function changeVideo4(e) {
    
    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
    slideArrPrueba = Array.from(slidePrueba);

    if (slideArrPrueba[3].classList.contains("hide")) {
        slideArrPrueba[3].classList.replace("hide", "show");
    }
    if (slideArrPrueba[4].classList.contains("show")) {
        slideArrPrueba[4].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[5].classList.contains("show")) {
        slideArrPrueba[5].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[0].classList.contains("show")) {
        slideArrPrueba[0].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[1].classList.contains("show")) {
        slideArrPrueba[1].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[2].classList.contains("show")) {
        slideArrPrueba[2].classList.replace("show", "hide");    
    }

    e.preventDefault();


}
function changeVideo5(e) {
    
    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
    slideArrPrueba = Array.from(slidePrueba);

    if (slideArrPrueba[4].classList.contains("hide")) {
        slideArrPrueba[4].classList.replace("hide", "show");
    }
   
    if (slideArrPrueba[5].classList.contains("show")) {
        slideArrPrueba[5].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[0].classList.contains("show")) {
        slideArrPrueba[0].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[1].classList.contains("show")) {
        slideArrPrueba[1].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[2].classList.contains("show")) {
        slideArrPrueba[2].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[3].classList.contains("show")) {
        slideArrPrueba[3].classList.replace("show", "hide");    
    }

    e.preventDefault();


}
function changeVideo6(e) {
    
    stopVideo();

    slidePrueba = document.querySelectorAll("div.modal-portfolio-carousel[style='display: block;'] > div > div > div > div > iframe");
    slideArrPrueba = Array.from(slidePrueba);

    if (slideArrPrueba[5].classList.contains("hide")) {
        slideArrPrueba[5].classList.replace("hide", "show");
    }
    if (slideArrPrueba[0].classList.contains("show")) {
        slideArrPrueba[0].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[1].classList.contains("show")) {
        slideArrPrueba[1].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[2].classList.contains("show")) {
        slideArrPrueba[2].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[3].classList.contains("show")) {
        slideArrPrueba[3].classList.replace("show", "hide");    
    }
    if (slideArrPrueba[4].classList.contains("show")) {
        slideArrPrueba[4].classList.replace("show", "hide");    
    }
    e.preventDefault();


}


