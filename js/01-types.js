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
function sayHelloToAll() {
    console.log("Hello to all!");
}
//# sourceMappingURL=01-types.js.map