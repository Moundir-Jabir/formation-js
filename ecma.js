let calcul = (...numbers) => {
    return numbers.reduce((accurence,number) => accurence + number, 0)
}

let somme = calcul(10,34,55)
//console.log(somme)

let double = (...numbers) => {
    return numbers.map((number => number *= 2))
}

//console.log(double(2,3,100))

let [a, b, c, ...d] = [10,7,5,2,34,5,6,2,5]
//console.log(a, b, c, d)

// la class SET permet de créer une liste des elements uniques

let names = new Set()  // on peut initialiser avec tableau
names.add("Moundir")
names.add("Moundir")
names.add("Said").add("Hassan")
console.log(names.has("Moundir"))
names.clear()
console.log(names)