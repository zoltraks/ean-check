'use strict';

// "export default" might be used instead "module.exports" for ES6
module.exports = {
    ean13: {
        /**
         * Generate valid EAN-13 code number 
         * @param {number} number
         * @return {number}
         */
        generate: function(number) {
            return ean13_generate(number);
        },
        /**
         * Validate EAN-13 code number 
         * @param {number} number
         * @return {bool}
         */
        check: function(number) {
            return ean13_check(number);
        }
    }
};

const ean13_generate = function(n) {
    if (typeof(n) !== 'number') {
        n = parseInt(n);
    }
    let s = 0;
    let f = 3;
    let o = n;
    for (let i = 0; i < 12; i++) {
        const r = o % 10;
        s += f * r;
        o = Math.floor(o / 10);
        if (0 === o) {
            break;
        }
        f = 3 == f ? 1 : 3;
    }
    const d = (10 - (s % 10)) % 10;
    n = n * 10 + d;
    return n.toString().padStart(13, '0');
}

const ean13_check = function(n) {
    if (typeof(n) !== 'number') {
        n = parseInt(n);
    }
    const x = n % 10;
    const o = Math.floor(n / 10);
    const d = ean13_generate(o) % 10;
    return x === d;
}
