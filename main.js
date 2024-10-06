// main.js

import { welcome, PassToFahrenheit, Factorial, powerNumber } from "./utility_functions.js";

// welcome message
welcome('Felipe', 'buitrago');

// Celsius to Fahrenheit
const celsius = 56;
console.log(`Your temperature in Fahrenheit is: ${PassToFahrenheit(celsius)}`);

// factorial of a number
console.log(`Factorial of 10: ${Factorial(10)}`);

// power of a number
powerNumber();
