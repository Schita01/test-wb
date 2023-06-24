const list = document.querySelectorAll("li")
const faBars = document.querySelector(".fa-bars")
const mobile = document.querySelector(".mobile")
const mobileMenu = document.querySelector(".mobile-menu")
const hero = document.querySelector(".hero")

faBars.addEventListener("click", () => {
    mobile.classList.toggle("active")
    hero.style.transition = "2s"


})

list.forEach((li) => {
    li.addEventListener("click", () => {
        list.forEach((li) => {
            li.classList.remove("active")
        })

        li.classList.add("active")
    })
})




