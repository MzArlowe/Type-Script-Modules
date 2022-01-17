function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);       //1            //2               //3  
    return numOne + numTwo;
}

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, " This is optional");