let headers = document.querySelectorAll('h2')
headers.forEach((header, index) => header.innerHTML = `Title ${index+1}`)
// modifier les attributs
let lien = document.querySelector('a')
//lien.setAttribute('href','https://github.com')
lien.href = 'https://github.com'
lien.innerText = "Github"
lien.style.fontSize = '50px'