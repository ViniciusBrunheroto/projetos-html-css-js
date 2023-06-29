const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')
const thumb2 = document.querySelector('.tb2')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 1; i < 6; i++) {
  const texto = 'images/pic' + i + '.jpg'
  console.log(texto)

  const newImage = document.createElement('img')
  newImage.setAttribute('src', texto)
  newImage.setAttribute('alt', texto)
  thumbBar.appendChild(newImage)

  newImage.addEventListener('click', function (e) {
    displayedImage.src = e.target.src
    displayedImage.alt = e.target.alt
  })

  const newImage2 = document.createElement('img')
  newImage2.setAttribute('src', texto)
  newImage2.setAttribute('alt', texto)
  thumb2.appendChild(newImage2)

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
  const btnInfo = btn.getAttribute('class')
  if (btnInfo === 'dark') {
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten'
    overlay.style.background = 'rgba(0,0,0,0.5)'
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Darken'
    overlay.style.background = 'rgba(0,0,0,0)'
  }
})
/*
btn.onclick = function (e) {
  const btnInfo = e.target.getAttribute('class')
  if (btnInfo === 'dark') {
    e.target.setAttribute('class', 'light')
    e.target.textContent = 'Lighten'
    overlay.style.background = 'rgba(0,0,0,0.5)'
  } else {
    e.target.setAttribute('class', 'dark')
    e.target.textContent = 'Darken'
    overlay.style.background = 'rgba(0,0,0,0)'
  }
}
*/