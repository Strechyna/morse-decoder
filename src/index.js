const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const BINARY_MORSE_TABLE = {
    '10': '.',
    '11': '-'
};

const SPACE = '**********';

function decode(expr) {
    const binaryCharRegExp = new RegExp(`.{10}`, 'g');
    const binaryChars = expr.match(binaryCharRegExp);
    return binaryChars.map(getChar).join('');
}

function getChar(binaryChar) {
    if (binaryChar === SPACE) return ' ';

    return MORSE_TABLE[getMorceKey(binaryChar.replace(/^0+/, ''))];
}

function getMorceKey(binaryChar) {
    const binaryMorseSymbolRegExp = new RegExp(`.{2}`, 'g');
    const binaryMorseSymbols = binaryChar.match(binaryMorseSymbolRegExp);

    return binaryMorseSymbols.map(val => BINARY_MORSE_TABLE[val]).join('');
}

module.exports = {
    decode
}