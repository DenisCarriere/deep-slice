# [deep-slice](https://www.npmjs.com/package/deep-slice)

[![Build Status](https://travis-ci.org/DenisCarriere/deep-slice.svg?branch=master)](https://travis-ci.org/DenisCarriere/deep-slice)
[![npm version](https://badge.fury.io/js/deep-slice.svg)](https://badge.fury.io/js/deep-slice)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DenisCarriere/deep-slice/master/LICENSE)

> Recursive Array.prototype.slice()

## Install

```bash
$ npm install --save deep-slice
```

## Usage

**Parameters**

-   `items` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** List of items
-   `start` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The beginning of the specified portion of the array.
-   `end` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** The end of the specified portion of the array.

**Examples**

```javascript
const deepSlice = require('deep-slice')

deepSlice([[10, 20, 30], [40, 50, 60]], 0, 2)
//=[[10, 20], [40, 50]]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Returns a section of an array.

## Related

-   [Array.prototype.slice()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) Mozilla Javascript reference

## License

MIT © [Denis Carriere](https://twitter.com/DenisCarriere)
