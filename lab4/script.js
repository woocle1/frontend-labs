// Task 1

let element5 = document.getElementById('element5')
let element6 = document.querySelector('.element6')

const onElement5Click = () => {
  element5.style.color = element5.style.color === 'green' ? 'black' : 'green'
  element5.style.backgroundColor = element5.style.backgroundColor === 'black' ? 'white' : 'black'
}

const onElement6Click = () => {
  element6.style.color = element6.style.color === 'green' ? 'black' : 'green'
  element6.style.backgroundColor = element6.style.backgroundColor === 'black' ? 'white' : 'black'
}

element5.onclick = onElement5Click
element6.onclick = onElement6Click

// Task2

let linkImages = document.getElementById('linkImages')

document.getElementById('addButton').onclick = () => {
  linkImages.appendChild(linkImages.querySelector('*').cloneNode(true))
}

document.getElementById('removeButton').onclick = () => {
  linkImages.removeChild(linkImages.querySelector('*'))
}

document.getElementById('zoomInButton').onclick = () => {
  linkImages.classList.add('zoomIn')
  linkImages.classList.remove('zoomOut')
}

document.getElementById('zoomOutButton').onclick = () => {
  linkImages.classList.add('zoomOut')
  linkImages.classList.remove('zoomIn')
}
