const menuHamburguesa = document.querySelector(".hamburguesa")
const nav = document.querySelector(".headerNav")

menuHamburguesa.addEventListener("click", () => {
    nav.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
    header.classList.add("shrink");
    } else {
    header.classList.remove("shrink");
    }
});
