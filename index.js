function toReadable(a) {
    let string = String(a)

    let number = (string.length == 1) ?
        one(a) :
        (string.length == 2 && a < 20) ?
            ttwo(a) :
            (string.length == 2) ?
                ttwo2(a) :
                (string.length == 3) ?
                    tthree(a) :
                    (string.length == 4) ?
                        ffour(a) : alert("Извените, числа выше 9999 мы тестируем");
    return number;
}
function one(b) {
    let vois = onen[b];
    return vois;
}

function ttwo(b) {
    let vois = two[b];
    return vois;
}
function ttthree(b) {
    let vois = three[b];
    return vois;
}
function four4(b) {
    let vois = four[b];
    return vois;
}

function delet(str) {
    let s = String(str)
    let n = s[0] + '0';
    return (+n)
}
function delet2(str) {
    let s = String(str)
    let m = s[1];
    return (+m)
}
function delet22(str) {
    let s = String(str)
    let m = s[1] + 0;
    return (+m)
}
function delet222(str) {
    let s = String(str)
    let m = s[2];
    return (+m)
}
function delet3(str) {
    let s = String(str)
    let m = s[0] + 0 + 0;
    return (+m)
}
function delet4(str) {
    let s = String(str)
    let m = s[0] + 0 + 0 + 0;
    return (+m)
}
function delet44(str) {
    let s = String(str)
    let m = s[1] + 0 + 0;
    return (+m)
}
function delet444(str) {
    let s = String(str)
    let m = s[2] + 0;
    return (+m)
}
function delet4444(str) {
    let s = String(str)
    let m = s[3];
    return (+m)
}
function ttwo2(string) {
    delet(string);
    delet2(string);
    let number = ttwo(delet(string)) + " " + one(delet2(string));
    return number;
}

function tthree(string) {
    delet(string);
    delet2(string);
    let number = ttthree(delet3(string)) + ' ' + ttwo(delet22(string)) + '' + one(delet222(string));
    return number;
}
function ffour(string) {
    delet(string);
    delet2(string);
    let number = four4(delet4(string)) + " " + ttthree(delet44(string)) + " " + ttwo(delet444(string)) + " " + one(delet4444(string));
    return number;
}


let onen = {
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
}
let two = {
    00: '',
    10: 'десять',
    11: 'одиннадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семьнадцать',
    18: 'восемьнадцать',
    19: 'девятнадцать',
    20: 'двадцать',
    30: 'тридцать',
    40: 'сорок',
    50: 'пятдесят',
    60: 'шесдесят',
    70: 'семдесят',
    80: 'восемдесят',
    90: 'девяносто',
}
let three = {
    100: 'сто',
    200: 'двести',
    300: 'триста',
    400: 'четыреста',
    500: 'пятьсот',
    600: 'шестьсот',
    700: 'семьсот',
    800: 'восемьсот',
    900: 'девятсот',
}

let four = {
    1000: 'тысяча',
    2000: 'две тысячи',
    3000: 'три тысячи',
    4000: 'четыре тысячи',
    5000: 'пять тысяч',
    6000: 'шесть тысяч',
    7000: 'семь тысяч',
    8000: 'восемь тысяч',
    9000: 'девять тысяч',
}

alert(toReadable(9999))