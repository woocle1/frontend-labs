function validateForm() {
  const patterns = {
    name: /^[А-ЯІЇЄҐа-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idCard: /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/,
    birthdate: /^\d{2}\.\d{2}\.\d{4}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
  }

  const fields = ['name', 'phone', 'idCard', 'birthdate', 'email']
  let isValid = true
  let output = document.getElementById('output')
  output.innerHTML = ''

  fields.forEach((field) => {
    let input = document.getElementById(field)
    if (patterns[field].test(input.value)) {
      input.classList.remove('error')
      input.classList.add('success')
    } else {
      input.classList.add('error')
      input.classList.remove('success')
      isValid = false
    }
  })

  if (isValid) {
    output.innerHTML = `
          <h3>Введена інформація:</h3>
          <p>ПІБ: ${document.getElementById('name').value}</p>
          <p>Телефон: ${document.getElementById('phone').value}</p>
          <p>ID-card: ${document.getElementById('idCard').value}</p>
          <p>Дата народж.: ${document.getElementById('birthdate').value}</p>
          <p>e-mail: ${document.getElementById('email').value}</p>
        `
  } else {
    output.innerHTML =
      "<p style='color:red;'>Будь ласка, виправте помилки у формі.</p>"
  }
}

const table = document.getElementById('table')
const colorPicker = document.getElementById('colorPicker')

let number = 1
for (let i = 0; i < 6; i++) {
  const row = document.createElement('tr')
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement('td')
    cell.textContent = number
    row.appendChild(cell)

    if (number === 4) {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`
      })

      cell.addEventListener('click', () => {
        colorPicker.click()
        colorPicker.oninput = () => {
          cell.style.backgroundColor = colorPicker.value
        }
      })

      cell.addEventListener('dblclick', () => {
        const cells = table.querySelectorAll('td')
        for (let k = 0; k < 6; k++) {
          cells[k * 7].style.backgroundColor = colorPicker.value
          cells[(k + 1) * 5].style.backgroundColor = colorPicker.value
        }
      })
    }
    number++
  }
  table.appendChild(row)
}
