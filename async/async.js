console.log("before")
let user = createUser(10)
console.log(user)
console.log("after")

function createUser (id) {
    setTimeout(() => {
        console.log("reiceve data from database")
        return {id: id, name: "Moundir"}
    }, 2000)
}