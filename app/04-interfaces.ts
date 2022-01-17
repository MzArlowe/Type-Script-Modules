interface Animal {
    name: string;
    numberOfLegs: number;
}

// let a: Animal = new Animal(); //a rule of interfaces is that you can't instantiate them which is why this throws an error. 

interface Animal {
    name: string;
    numberOfLegs: number;
}

let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
}

// sayHelloToAll(name: string) : string {

//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on", d);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));