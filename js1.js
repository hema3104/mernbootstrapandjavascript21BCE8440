function reverseNumber(num) {
    // Convert the number to a string
    let numString = num.toString();

    // Reverse the string
    let reversedString = numString.split('').reverse().join('');

    // Convert the reversed string back to a number
    let reversedNumber = parseInt(reversedString, 10);

    return reversedNumber;
}

// Example usage
let originalNumber = 34223;
let reversedNumber = reverseNumber(originalNumber);

console.log(`Original Number: ${originalNumber}`);
console.log(`Reversed Number: ${reversedNumber}`);
