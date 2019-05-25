'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
// "export default" might be used instead "module.exports" for ES6
module.exports = {
    ean13: {
        generate: function(number) {
            return ean13_generate(number);
        },
        check: function(number) {
            return ean13_check(number);
        }
    }
};

const ean13_generate = function(n) {
    let s = 0;
    let f = 3;
    let o = n;
    for (let i = 0; i < 12; i++) {
        let r = o % 10;
        s += f * r;
        o = Math.floor(o / 10);
        if (0 === o) {
            break;
        }
        f = 3 == f ? 1 : 3;
    }
    let d = 10 - (s % 10)
    n = n * 10 + d;
    return n;
}

const ean13_check = function(n) {
    let x = n % 10;
    let o = Math.floor(n / 10);
    let d = ean13_generate(o) % 10;
    return x === d;
}
