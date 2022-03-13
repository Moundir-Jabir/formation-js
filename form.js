let pattern = /^[a-zA-Z0-9]{5,10}$/
let form = document.querySelector('form')
let message = document.querySelector('div')
let input = document.querySelector('input')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(pattern.test(form.username.value))
        message.innerText = "username valide"
    else
        message.innerText = "username must contain letters only and between 5 and 10 characters !!"
})

input.addEventListener('keyup', (e) => {
    if(pattern.test(input.value))
        message.innerText = "username valide"
    else
        message.innerText = "username must contain letters only and between 5 and 10 characters !!"
})