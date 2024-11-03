document
  .getElementById('fetchUsersButton')
  .addEventListener('click', fetchUsersData)

function fetchUsersData() {
  fetch('https://randomuser.me/api/?results=5')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Помилка завантаження даних')
      }
      return response.json()
    })
    .then((data) => {
      displayUsersInfo(data.results)
    })
    .catch((error) => {
      console.error('Помилка:', error)
    })
}

function displayUsersInfo(users) {
  const usersInfoDiv = document.getElementById('usersInfo')
  usersInfoDiv.innerHTML = ''

  users.forEach((user) => {
    const userDiv = document.createElement('div')
    userDiv.classList.add('user-info')

    userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
            <p><strong>Місто:</strong> ${user.location.city}</p>
            <p><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `

    usersInfoDiv.appendChild(userDiv)
  })
}
