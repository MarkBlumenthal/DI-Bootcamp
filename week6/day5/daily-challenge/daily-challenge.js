function isAnagram(str1, str2) {
    // Normalize the strings: remove whitespace and convert to lowercase
    let Str1 = str1.replace(/\s+/g, '').toLowerCase();
    let Str2 = str2.replace(/\s+/g, '').toLowerCase();

    if (Str1.length !== Str2.length) {
        return false;
    }

    let charCount = {};

    // Count characters in the first string
    for (let char of Str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract count for characters in the second string
    for (let char of Str2) {
        if (!charCount[char]) {
            return false; // Found a char in str2 not in str1, or more instances than in str1
        }
        charCount[char] -= 1;
    }

    // If all counts are zero, strings are anagrams
    return Object.values(charCount).every(count => count === 0);
}

console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
