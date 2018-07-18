// learning implicit type script
var a;
var b = 5;
var c = "abc";
//here variable a is assigned nothing and variable b is by default assigned to number which cannot be changed, variable is c is assigned to a string abc which cannot be changed to anything other than string.
var fun = function () {
    return "madhu";
};
var greeting;
greeting = console.log(fun());
// greeting is declared but assigned to any type by default because we are not mentioning any specific data type for greeting.
//in the next step greeting is taking in a funcction which returns a string.
greeting = 10;
greeting = "madhu hi";
console.log(greeting);
// assigning two data types to a sigle variable 
var varia;
varia = 5;
varia = true;
