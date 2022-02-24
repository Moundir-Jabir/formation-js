let names = ['Moundir','Said','Hassan','Mohamed','Yassin','Morad']
let html = ""

const affiche = (name,index) => html += `<li>${name}</li>`

names.forEach(affiche)

let list = document.querySelector('.persons')
list.innerHTML = html

// object

let user = {
    name: "moundir jabir",
    courses: [
        {name: "Reactjs", price: 250},
        {name: "Laravel", price: 300},
        {name: "Nodejs", price: 450},
        {name: "Git et Github", price: 130}
    ],
    login() {
        console.log(`je m'appelle ${this.name}`)
    },
    showCourses(){
        this.courses.forEach((course) => console.log(`${course.name} : ${course.price} $`))
    }
}

user.showCourses()