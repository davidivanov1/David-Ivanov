// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function checkType(param) {
    const type = typeof param;
    console.log(`The type of the parameter is: ${type}`);
    return type;
}

checkType({}); // object 
checkType(true); // boolean
checkType(42); // number
checkType("Hello, world"); // string
checkType(undefined); //undefined

console.log("================================");

// Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function convert(dogAge, human) {
    let dogAgeConvert = human * 7;
    let humanAgeConvert = dogAge / 7;
  
    console.log(`Dog age are ${dogAge} in human age it is `, humanAgeConvert);
    console.log(`For human age it is ${human} for dog age it is `, dogAgeConvert);
  }
  convert(35, 2);
  
  console.log("================================");

// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let money = 10000;
let getMoney = 5000;
if (getMoney > money) {
  console.log("Not enough money");
} else {
  remain = money - getMoney;
  console.log(`There are `, remain, ` left on your card.`);
}

console.log("================================");

// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values

let input = prompt("Enter the year");
let convinput = parseInt(input);

let horoscope = (convinput - 4) % 12;
if (horoscope === 0) {
  console.log("Your horoscope is Rat");
} else if (horoscope === 1) {
  console.log("Your horoscope is Ox");
} else if (horoscope === 2) {
  console.log("Your horoscope is Ox");
} else if (horoscope === 3) {
  console.log("Your horoscope is Tiger");
} else if (horoscope === 4) {
  console.log("Your horoscope is Rabbit");
} else if (horoscope === 5) {
  console.log("Your horoscope is Dragon");
} else if (horoscope === 6) {
  console.log("Your horoscope is Snake");
} else if (horoscope === 7) {
  console.log("Your horoscope is Horse");
} else if (horoscope === 8) {
  console.log("Your horoscope is Goat");
} else if (horoscope === 9) {
  console.log("Your horoscope is Monkey");
} else if (horoscope === 10) {
  console.log("Your horoscope is Rooster");
} else if (horoscope === 11) {
  console.log("Your horoscope is Dog");
} else if (horoscope === 12) {
  console.log("Your horoscope is Pig");
}
