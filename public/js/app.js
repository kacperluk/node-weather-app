const weatherForm = document.querySelector('form')
const searchElemet = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageTwo.textContent = 'Loading...'
    const location = searchElemet.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }
            else {
                messageOne.textContent = ''
                const message = `location:${data.location} forecast:${data.forecast} humidity:${data.humidity} temperature:${data.temperature}`
                messageTwo.textContent = message
            }
        })
    })
})