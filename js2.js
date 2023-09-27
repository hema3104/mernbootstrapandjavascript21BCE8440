function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters
    let charArray = inputString.split('');

    // Sort the array alphabetically
    let sortedArray = charArray.sort();

    // Join the sorted array back into a string
    let sortedString = sortedArray.join('');

    return sortedString;
}

// Example usage
let originalString = "webmaster";
let sortedString = sortStringAlphabetically(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Sorted String: ${sortedString}`);
