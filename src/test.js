
console.log('\x1b[33m%s\x1b[0m', "Welcome to test script for a package.");
console.info("%cStarting a test", "color:blue");
console.log('%cTHREE %cTWO %cONE', 'color:blue;border:1px solid black', 'color:black;border:1px solid black', 'color:black;border:1px solid black');

let ean = require('./index.js');
let code;
code = ean.ean13.generate("09000001");
console.log("code: " + code + " check: " + ean.ean13.check(code));
console.log(ean.ean13.generate(123));
console.log(ean.ean13.check("1236"));
console.log(ean.ean13.check("1237"));
console.log("")


