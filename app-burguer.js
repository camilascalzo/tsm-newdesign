const navSlide = () => {
   	const burguer = document.querySelector(".burguer");
    const burguerIcon = document.querySelector("#burguer-icon");
    const closeIcon = document.querySelector("#close-icon");
    const nav = document.querySelector(".nav-links");

    burguer.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
				if (nav.classList.contains("nav-active")) {
					burguerIcon.style.display = "none";
					closeIcon.style.display = "inline-block";
			} else {
					burguerIcon.style.display = "inline-block";
					closeIcon.style.display = "none";
			}
    });
};

navSlide();