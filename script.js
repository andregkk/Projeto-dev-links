let toggleMode = () => {
  const html = document.documentElement
  html.classList.toggle("light")

  // formas de fazer
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/124585575.jpg")
    img.setAttribute(
      "alt",
      "Foto de Perfil André Guilherme no GitHub."
    )
  } else {
    img.setAttribute("src", "https://github.com/andregkk.png")
    img.setAttribute(
      "alt",
      "Foto de Perfil André Guilherme no GitHub."
    )
  }
}
