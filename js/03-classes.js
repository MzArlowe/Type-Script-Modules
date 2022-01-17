// class Person {
//     firstName: string;
//     lastName: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let phil: Person = new Person();
// phil.firstName = "Phil";
// phil.lastName = "Donahue";
// console.log()
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
//INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//Example 1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
//Example Two
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
//# sourceMappingURL=03-classes.js.map