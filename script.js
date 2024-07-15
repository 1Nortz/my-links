function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/2f16303203cd01a5b4301f012c85796b-removebg-preview.png"
    )
    img.setAttribute("alt", "Toji")
  } else {
    img.setAttribute("src", "./assets/20.png")
    img.setAttribute("alt", "Gojo")
  }
}
