let incre = document.getElementById("incre")
let decre = document.getElementById("decre")
let reset = document.getElementById("reset")
let value = document.getElementById("value")

incre.addEventListener("click", () => {
  value.innerHTML = parseInt(value.innerHTML) + 1
})
decre.addEventListener("click", () => {
  value.innerHTML = parseInt(value.innerHTML) - 1
})
reset.addEventListener("click", () => {
  value.innerHTML = 0
})
