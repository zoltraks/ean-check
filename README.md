# International Article Number

JavaScript library for validating and generating EAN barcode numbers.

Supports EAN-13 standard.

## Install

```
npm install ean-check --save
```

## Usage

```js
let ean = require('ean-check');
console.log(ean.ean13.generate(123));
console.log(ean.ean13.check("1236"));
console.log(ean.ean13.check("1237"));
```
