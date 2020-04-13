function countVowels(stringToCheck) {
    stringToCheck = stringToCheck.toLowerCase();
    let vowels = 'aeiou';
    let vowelsCount = 0;
    for (let charFromString of stringToCheck) {
        if (vowels.includes(charFromString)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

countVowels('vaEtyr');