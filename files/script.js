function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // img

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')){
        img.setAttribute("src", "./assets/white-wolf.png")
        img.setAttribute("alt", "Wolf White")
    } else {
        img.setAttribute("src", "./assets/dark-wolf.png")
        img.setAttribute("alt", "Wolf Dark")
    }
}