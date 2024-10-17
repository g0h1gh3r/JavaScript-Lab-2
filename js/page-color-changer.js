// Grab the element I need
const redSlider = document.querySelector('#red')
const greenSlider = document.querySelector('#green')
const blueSlider = document.querySelector('#blue')
const body = document.body

// Add a function to update background color
const updateBackgroundColor = () => {
  // Get value from three slider
  const redValue = redSlider.value
  const greenValue = greenSlider.value
  const blueValue = blueSlider.value

  // Set the background color of body
  body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`
}
