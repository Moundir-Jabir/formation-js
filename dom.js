let headers = document.querySelectorAll('h2')
headers.forEach((header, index) => header.innerHTML = `Title ${index+1}`)
// modifier les attributs
let lien = document.querySelector('a')
//lien.setAttribute('href','https://github.com')
lien.href = 'https://github.com'
lien.innerText = "Github"
lien.style.fontSize = '50px'

let h3 = document.querySelector('h3')
h3.classList.add('center')
h3.classList.remove('center')