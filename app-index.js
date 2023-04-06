// MODAL

const openModalBtn = document.querySelectorAll(".open-modal-btn");
const openModalBtnArr = Array.from(openModalBtn).entries();
const modal = document.getElementsByClassName("modal");
const closeModalBtn = document.querySelectorAll(".close-modal-btn");
const closeModalBtnArr = Array.from(closeModalBtn).entries();

console.log(modal);



for (let [index, open] of openModalBtnArr) {
    const openModal = function (e) {
        modal[index].style.display = "block";
        e.preventDefault();
    };
    open.addEventListener("click", openModal);
}

for(let [index, close] of closeModalBtnArr) {
   const closeModal = function (e) {
       modal[index].style.display = "none";
			 console.log(closeModalBtn);
			 console.log(index);
       e.preventDefault();
   };
   close.addEventListener("click", closeModal);
}
