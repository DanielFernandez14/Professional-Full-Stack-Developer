const menuHamburguesa = document.querySelector(".hamburguesa")
const nav = document.querySelector(".headerNav")

menuHamburguesa.addEventListener("click", () => {
    nav.classList.toggle("active")
})