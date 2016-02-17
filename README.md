# is-undefined [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/is-undefined.svg)](https://www.npmjs.com/package/is-undefined) [![Downloads](https://img.shields.io/npm/dt/is-undefined.svg)](https://www.npmjs.com/package/is-undefined) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a value is undefined or not.

## Installation

```sh
$ npm i --save is-undefined
```

## Example

```js
const isUndefined = require("is-undefined");

console.log(isUndefined(undefined));
// => true

console.log(isUndefined(false));
// => false

console.log(isUndefined(null));
// => false
```

## Documentation

### `isUndefined(input)`
Checks if a value is undefined or not.

#### Params
- **Anything** `input`: The input value.

#### Return
- **Boolean** `true`, if the input is `undefined`, `false` otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md