function reverseWord(word) {
    const eachCharSeparator = '';
    const noSeparator = '';

    return word
        .split(eachCharSeparator)
        .reverse()
        .join(noSeparator);
}

function checkPalindrom(word) {
    word = word.toLowerCase();
    let reversedWord = reverseWord(word);
    return word === reversedWord;
}

let word = 'Matm';
let a = checkPalindrom(word);

