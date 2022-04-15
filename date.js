let now = new Date()
let before = new Date("2000-04-27")
console.log(now, before)
let monAge = now.getTime() - before.getTime()
monAge = monAge / 1000 / 3600 / 24 / 30 / 12
console.log(Math.round(monAge))