class Car {
    constructor(marque, hp, speed) {
        this.marque = marque
        this.hp = hp
        this.speedMax = speed
    }

    diagnostic(){
        console.log(`${this.marque} has ${this.hp} horse power, max speed : ${this.speedMax}`)
    }
}

let yaris = new Car("Toyota", 8, 240)
//yaris.diagnostic()

class SuperCar extends Car {
    constructor(marque, hp, speed, spoiler, diffuser){
        super(marque,hp,speed)
        this.spoiler = spoiler
        this.diffuser = diffuser
    }

    diagnostic(){
        console.log(this)
    }
}

let ferrari = new SuperCar("ferrari lusso", 890, 360, true, "carbon fiber")
ferrari.diagnostic()