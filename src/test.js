let ean = require('./index.js');
let code;
code = ean.ean13.generate("09000001");
console.log("code: " + code + " check: " + ean.ean13.check(code));
console.log(ean.ean13.generate(123));
console.log(ean.ean13.check("1236"));
console.log(ean.ean13.check("1237"));
