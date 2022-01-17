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

function sayHelloToAll() : void {
    console.log("Hello to all!")
}

