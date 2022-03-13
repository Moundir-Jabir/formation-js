let ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    e.target.remove()
})

let bouton = document.querySelector('button')
bouton.addEventListener('click',() => {
    let li = document.createElement('li')
    li.textContent = 'MERN Stack'
    ul.append(li) //ajouter
})