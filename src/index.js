const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [], newArr = [];
    let a = 0;
    let b = 10;
    let h = 0, g = 0;
    for (let i = 0; i < expr.length; i+= 10) {
        let res = arr.push(expr.substring(a, b));
        a += 10;
        b += 10;
    }

    for (g; g < arr.length; g++) {
        let result = arr[g].split( /(?=(?:\d{2})+(?!\d))/ )
        let finres = newArr.push(result)
    }

    let newestArr = [];
    let str = '';
    for (h = 0; h < arr.length; h++) {
        newArr[h].map((n) => {
            if (n === "10") {
                str = `${str}.`
            }
            if (n === "11") {
                str = `${str}-`
            }
            if (n === "00") {
                str = `${str}`
            }
            if (n === "**********") {
                str = `${str} ` 
            }
    })
    str = `${str} ` 
    }

    let strConverted = [];

    str.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            strConverted.push(MORSE_TABLE[letter]);
        });
        strConverted.push(" ");
    });

    return strConverted.join("").trim();
}

module.exports = {
    decode
}