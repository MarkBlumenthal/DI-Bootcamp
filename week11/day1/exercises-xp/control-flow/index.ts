function checkNumber(num: number): string {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}


const number1 = 20;
console.log(`Input: ${number1} - ${checkNumber(number1)}`);

const number2 = -3;
console.log(`Input: ${number2} - ${checkNumber(number2)}`);

const number3 = 0;
console.log(`Input: ${number3} - ${checkNumber(number3)}`);
