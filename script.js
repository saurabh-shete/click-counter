let count = 0
const button = document.getElementById('click-btn')
const countDisplay = document.getElementById('count')
const clickAnimation = document.getElementById('click-animation')

button.addEventListener('click', () => {
  count++
  countDisplay.innerHTML = count

  // Play the click animation
  clickAnimation.style.opacity = 1
  setTimeout(() => {
    clickAnimation.style.opacity = 0
  }, 1000)
})
