const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    // const burguerLines = document.querySelector("#burguer-lines");
    const nav = document.querySelector (".nav-links");
    // const closeBurguer = document.querySelector ("#close-burguer");

    burguer.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    })

}

navSlide();