// utility_functions.js

export function welcome(firstName, lastName) {
    console.log(`Welcome new student ${firstName} ${lastName} to Georgian College`);
}

export function PassToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export function Factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

export function powerNumber() {
    const base = 2;
    const exponent = 8;
    const result = Math.pow(base, exponent);
    console.log(`${base} raised to the power of ${exponent} is ${result}`);
}
