// class Person {
//     firstName: string;
//     lastName: string;
// }

// let phil: Person = new Person();

// phil.firstName = "Phil";
// phil.lastName = "Donahue";

// console.log()

class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
}

let kenn: Person = new Person();

kenn.firstName = "Kenn";
kenn.sayHello();

class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

//INHERITANCE

class Vehicle { //Parent class
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    rus: boolean;
    topSpeed: number;
}
//Example 1
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

//Example Two

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;