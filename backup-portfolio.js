// // const openCarouselBtn = document.querySelectorAll(".watch-btn").forEach(item => {item.addEventListener("click", openModal)});
// const openCarouselBtn = document.querySelectorAll(".watch-btn");
// const openCarouselBtnArr = Array.from(openCarouselBtn).entries();
// // const nextBtn1 = document.querySelectorAll(".next-btn-1").forEach(item => {item.addEventListener("click", changeSlideNext1)});
// // const nextBtn2 = document.querySelectorAll(".next-btn-2").forEach(item => {item.addEventListener("click", changeSlideNext2)});
// // const nextBtn3 = document.querySelectorAll(".next-btn-3").forEach(item => {item.addEventListener("click", changeSlideNext3)});
// const nextBtn4 = document.querySelectorAll(".next-btn-4").forEach(item => {item.addEventListener("click", changeSlideNext4)});
// const nextBtn5 = document.querySelectorAll(".next-btn-5").forEach(item => {item.addEventListener("click", changeSlideNext5)});
// // const prevBtn = document.querySelectorAll(".prev-btn").forEach(item => {item.addEventListener("click", changeSlidePrev)});
// // const slide1 = document.querySelectorAll(".slide-1")
// // const slide2 = document.querySelectorAll(".slide-2")
// // const slide3 = document.querySelectorAll(".slide-3");
// const slide4 = document.querySelectorAll(".slide-4");
// const slide5 = document.querySelectorAll(".slide-5");
// const modalVideo = document.getElementsByClassName("modal-portfolio-carousel");
// const modalVideoArr = Array.from(modalVideo);
// // const closeModalBtn = document.querySelectorAll(".close-portfolio-carousel").forEach(item => {item.addEventListener("click", closeModal)});
// const closeModalBtn = document.querySelectorAll(".close-portfolio-carousel");
// const closeModalBtnArr = Array.from(closeModalBtn).entries();
// // const iframeWrap = document.querySelectorAll(".iframe-wrapper");
// // const iframeWrapArr = Array.from(iframeWrap);
// // const slideArr1 = Array.from(slide1);
// // const slideArr2 = Array.from(slide2);
// // const slideArr3 = Array.from(slide3);
// const slideArr4 = Array.from(slide4);
// const slideArr5 = Array.from(slide5);
// const iframe = document.querySelectorAll("iframe");
// const iframeArr = Array.from(iframe).entries();

// // const nextVideo = document.querySelectorAll(".btn-carousel");
// // const nextVideoArr = Array.from(nextVideo).entries();

// // const slide = document.querySelectorAll(".slide");
// // const slideArr = Array.from(slide);

// // console.log(slideArr);



// // const btnCarousel = document.querySelectorAll(".btn-carousel");
// // const btnCarouselArr = Array.from(btnCarousel);
// // const slideContainer = document.querySelectorAll(".container-prueba iframe");
// // const slideContainerArr = Array.from(slideContainer);
// // const slide = document.querySelectorAll(".slide");
// // const slideArr = Array.from(slide);


// let currentSlide;
// let nextSlide;
// // let prevSlide;
// // autoPlayVideo();
// // stopVideo();
// // openModal();
// // stopVideo();


// //MODAL

 
//      for (let [index, open] of openCarouselBtnArr) {
//          const openModal = function (e) {

//              modalVideo[index].style.display = "block";
//              e.preventDefault();
//          };
//          open.addEventListener("click", openModal);
         

//      }

//      for(let [index, close] of closeModalBtnArr) {
//         const closeModal = function (e) {
//             modalVideo[index].style.display = "none";
            
//                 let video = modalVideo[index].querySelector("iframe[src*='player.vimeo.com']");
//                 if(!video) return;
//             video.src = video.src.replace("&autoplay=1", "").replace("?autoplay=1", "");
    
             
//             e.preventDefault();
//         };
//         close.addEventListener("click", closeModal);
//      }
     
//     //  function stopVideo() {
//     //     let video = iframeArr[24];
//     //     if(!video) return;
//     //     video.src = video.src.replace("&autoplay=1", "").replace("?autoplay=1", "");
//     //     console.log(video);
//     // };

//     //  for (let[index, stop] of closeModalBtnArr) {
//     //      const stopVideo = function () {
//     //         let video = modalVideo[index].querySelector("iframe[src*='player.vimeo.com']");
//     //         if(!video) return;
//     //     video.src = video.src.replace("&autoplay=1", "").replace("?autoplay=1", "");

//     //      }
//     //      stop.addEventListener("click", stopVideo);
//     //  }
     
     

 
//     // for(let [index, trigger] of openCarouselBtnArr) {
        
//     //     const openModal = function (e) {

//     //         modalVideo[index].style.display = "block";
//     //         e.preventDefault();
//     //     }
            
        
//     //     trigger.addEventListener("click", openModal);
//     // };




// // openCarouselBtnArr[0].addEventListener("click", function(e) {
// //     modalVideo[0].style.display = "block";

// //     // autoPlayVideo();

// //     e.preventDefault();
// // });
// // openCarouselBtnArr[1].addEventListener("click", function(e) {
// //     modalVideo[1].style.display = "block";
// //     e.preventDefault();
// // });
// // openCarouselBtnArr[2].addEventListener("click", function(e) {
// //     modalVideo[2].style.display = "block";
// //     e.preventDefault();
// // });
// // openCarouselBtnArr[3].addEventListener("click", function(e) {
// //     modalVideo[3].style.display = "block";
// //     e.preventDefault();
// // });
// // openCarouselBtnArr[4].addEventListener("click", function(e) {
// //     modalVideo[4].style.display = "block";
// //     e.preventDefault();
// // });



// // function closeModal(e) {
// //     modalVideo[0].style.display = "none";
// //     modalVideo[1].style.display = "none";
// //     modalVideo[2].style.display = "none";
// //     modalVideo[3].style.display = "none";
// //     modalVideo[4].style.display = "none";

// //     stopVideo();
    
    
// // }

// // function autoPlayVideo() {
// //     let video = modalVideo[0].querySelector("iframe[src*='player.vimeo.com']");
// //     if(!video) return;
// //     video.src = video.src + (video.src.indexOf("?") < 0 ? "?" : "&") + "autoplay=1";

// //     console.log(video);
// // };





// // function stopVideo() {
// //     let video = modalVideo[1].querySelector("iframe[src*='player.vimeo.com']");
// //     if(!video) return;
// //     video.src = video.src.replace("&autoplay=1", "").replace("?autoplay=1", "");
// //     console.log(video);
// // };

// // CAROUSEL

// // function changeSlideNext1(e) {
// //     if(!currentSlide) {
// //         nextSlide = 1 //true una sola vez
// //         currentSlide = 0
// //     } else if(nextSlide >= slideArr1.length - 1) {
// //         nextSlide = 0
// //         } else  {
// //         nextSlide++
// //     }

// //     if(slideArr1[nextSlide].classList.contains("hide")) {
// //         slideArr1[nextSlide].classList.replace("hide", "show");
        
// //         }

// //     if(slideArr1[currentSlide].classList.contains("show")) {
// //         slideArr1[currentSlide].classList.replace("show", "hide");
// //         }

// //     currentSlide = nextSlide
// //     e.preventDefault();
// // }
// // function changeSlideNext2(e) {
// //     if(!currentSlide) {
// //         nextSlide = 1 //true una sola vez
// //         currentSlide = 0
// //     } else if(nextSlide >= slideArr2.length - 1) {
// //         nextSlide = 0
// //         } else  {
// //         nextSlide++
// //     }

// //     if(slideArr2[nextSlide].classList.contains("hide")) {
// //         slideArr2[nextSlide].classList.replace("hide", "show");
        
// //         }

// //     if(slideArr2[currentSlide].classList.contains("show")) {
// //         slideArr2[currentSlide].classList.replace("show", "hide");
// //         }

// //     currentSlide = nextSlide
// //     e.preventDefault();
// // }
// // function changeSlideNext3(e) {
// //     if(!currentSlide) {
// //         nextSlide = 1 //true una sola vez
// //         currentSlide = 0
// //     } else if(nextSlide >= slideArr3.length - 1) {
// //         nextSlide = 0
// //         } else  {
// //         nextSlide++
// //     }

// //     if(slideArr3[nextSlide].classList.contains("hide")) {
// //         slideArr3[nextSlide].classList.replace("hide", "show");
        
// //         }

// //     if(slideArr3[currentSlide].classList.contains("show")) {
// //         slideArr3[currentSlide].classList.replace("show", "hide");
// //         }

// //     currentSlide = nextSlide
// //     e.preventDefault();
// // }
// function changeSlideNext4(e) {
//     stopVideo();
//     if(!currentSlide) {
//         nextSlide = 1 //true una sola vez
//         currentSlide = 0
//     } else if(nextSlide >= slideArr4.length - 1) {
//         nextSlide = 0
//         } else  {
//         nextSlide++
//     }

//     if(slideArr4[nextSlide].classList.contains("hide")) {
//         slideArr4[nextSlide].classList.replace("hide", "show");
        
        
//         }

//     if(slideArr4[currentSlide].classList.contains("show")) {
//         slideArr4[currentSlide].classList.replace("show", "hide");
//         }

//     currentSlide = nextSlide
//     e.preventDefault();
// }
// function changeSlideNext5(e) {
//     if(!currentSlide) {
//         nextSlide = 1 //true una sola vez
//         currentSlide = 0
//     } else if(nextSlide >= slideArr5.length - 1) {
//         nextSlide = 0
//         } else  {
//         nextSlide++
//     }

//     if(slideArr5[nextSlide].classList.contains("hide")) {
//         slideArr5[nextSlide].classList.replace("hide", "show");
        
//         }

//     if(slideArr5[currentSlide].classList.contains("show")) {
//         slideArr5[currentSlide].classList.replace("show", "hide");
//         }

//     currentSlide = nextSlide
//     e.preventDefault();
// }






