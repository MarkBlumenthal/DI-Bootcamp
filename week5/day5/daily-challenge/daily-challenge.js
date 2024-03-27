function isAnagram(str1, str2) {
    // Normalize the strings: remove whitespace and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();
    
    // Early return if the lengths are different
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }
    
    // Compare sorted strings
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}


console.log(isAnagram("Astronomer", "Moon starer")); // this log is true
console.log(isAnagram("School master", "The classroom")); // this log is true
console.log(isAnagram("The Morse Code", "Here come dots")); // this log is true
