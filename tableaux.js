let ages = [10, 25, 50, 7, 18, 70, 8, 12]
let mineur = ages.filter(age => age < 18)
//console.log(mineur)
let agePlus = ages.map(age => age += 10)
//console.log(agePlus)
let somme = ages.reduce((accurence,age) => accurence + age, 0)
//console.log(somme)
let occurence = ages.find(age => age > 40) // retourne la 1ere occurence qui verifie la condition
//console.log(occurence)
//console.log(ages.sort((a,b) => a - b))
let n = 5
let i
for(i=0;i<n;i++){
    n *= (n-1)
    i++
}
console.log(n)