var username = "instructor";
// let password: string = "Letmein1234!"; // Cannot redeclare password twice as you have done below
var instructorId = 5;
// Or
var password;
var phoneNumber;
var email;
var socialSecurityNumber;
var isMarried;
//And
var greeting = "Hello";
//Compile-Time Error ex.
// let password: string;
// password = 1234; is not string. is number
//Number
var age = 40;
var currentYear = 2018;
//TypeScript supports ES6 octal literals
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//String
var companyName;
companyName = "Eleven Fifty";
//can use different quotation types '' and "" in the same method
//Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
//Array - can be expressed in 2 different ways
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//Accessing the array indices works in the same way
console.log("Student List:", studentList[0]);
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Any Type (typeof)
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// VOID - seen in functions that return no value
// function sayHelloToAll() : void {
//     console.log("Hello to all!")
// }
//Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple - abbreviation of mulTuple
//Declare a tuple type
var usernameAndId;
//Initialize it
usernameAndId = [1, "kennisreally40"]; //OK - Also, you'll get an error if you initialize the array out of order of how it was declared
//Enum - with this we can give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//Like arrays, enums start at 0 but the string index can be assigned a different number:
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//Union Types - Allows more flexibility with our variables
var x;
var y;
//Now the variables can take on more than one type.
x = '12345';
x = 1234; //As you can see, we are getting no errors. With Boolean, however...
// x = true;
// y = false; // We can use Union Types with Optionals later
// Annotation
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3 erroring out when it shouldn't
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
//RETURN TYPES
function hello(greetingString) {
    return greetingString;
}
// foo(1); //1
function sayHelloToAll(name) {
    return name;
}
sayHelloToAll("Kenn");
// sayHelloToAll(1);
//# sourceMappingURL=01-types.js.map