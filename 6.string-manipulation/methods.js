//to uppercase string with method

let string = "hello world";
let upperString = string.toUpperCase();
console.log(upperString);

//to uppercase first letter of string with method
const string1 = "hello world";
const upperFirst = string1.charAt(0).toUpperCase() + string1.slice(1);
console.log(upperFirst);

//to uppercase each word of string with method
const string2 = "hei kamu yang ada disana";
const upperEach = string2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(upperEach);

//to number each vocal A I O, uppercase each word and change to randomize symbol  with method
const string3 = "hei kamu yang ada disana";
const upperEach1 = string3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const numberEach = upperEach1.replace(/a/g, 4).replace(/i/g, 1).replace(/o/g, 0);
console.log(numberEach);
