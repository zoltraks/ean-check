let ean = require('./index.js');
console.log(ean.ean13.generate(123));
console.log(ean.ean13.check("1236"));
console.log(ean.ean13.check("1237"));
