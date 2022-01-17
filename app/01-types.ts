let username: string = "instructor";
// let password: string = "Letmein1234!"; // Cannot redeclare password twice as you have done below
let instructorId: number = 5;
// Or
let password: string;
let phoneNumber: number;
let email: string;
let socialSecurityNumber: number;
let isMarried: boolean;
//And
let greeting = "Hello";

//Compile-Time Error ex.
// let password: string;
// password = 1234; is not string. is number

//Number

let age: number = 40;
let currentYear: number = 2018
//TypeScript supports ES6 octal literals
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//String

let companyName: string;
companyName = "Eleven Fifty"
//can use different quotation types '' and "" in the same method

//Boolean

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//Array - can be expressed in 2 different ways

//1
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96]

//Accessing the array indices works in the same way
console.log("Student List:", studentList[0]);

let dataFromThirdParty: any = '12345';
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

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple - abbreviation of mulTuple
//Declare a tuple type
let usernameAndId: [number, string];
//Initialize it
usernameAndId = [1, "kennisreally40"]; //OK - Also, you'll get an error if you initialize the array out of order of how it was declared

//Enum - with this we can give names to numeric values
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
//Like arrays, enums start at 0 but the string index can be assigned a different number:
enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType)

//Union Types - Allows more flexibility with our variables
let x: number | string;
let y: number | null;
//Now the variables can take on more than one type.
x = '12345';
x = 1234; //As you can see, we are getting no errors. With Boolean, however...

// x = true;
// y = false; // We can use Union Types with Optionals later

// Annotation

function demoFunction(someNum){
    return someNum;
}

demoFunction(1); //1
demoFunction("stuff"); //2
// demoFunction(1, "Stuff"); //3 erroring out when it shouldn't

function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//1 - Works
addNumbers(1, 2);

//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

//RETURN TYPES

function hello(greetingString){
    return greetingString;
}

// foo(1); //1

function sayHelloToAll(name: string) : string {
    return name;
}

sayHelloToAll("Kenn");
// sayHelloToAll(1);