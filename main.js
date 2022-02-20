const scrolltopbutton = document.querySelector(".scrolltopbutton");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrolltopbutton.classList.add("active");
    } else {
        scrolltopbutton.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        scrolltopbutton.classList.add("active2");
    } else {
        scrolltopbutton.classList.remove("active2");
    }
});