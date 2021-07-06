let color = document.getElementById("color")

color.addEventListener("change", () => {
  document.body.style.background = color.value
  console.log(color.value)
})
