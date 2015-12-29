![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] skeleton to write plugin

# seneca-skeleton
[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter][gitter-badge]][gitter-url]


[![js-standard-style][standard-badge]][standard-style]

A Seneca skeleton to write plugin

- __Version:__ 0.0.1
- __Tested on:__ Seneca 0.9.2
- __Node:__ 4, 5

If you are new to Seneca in general, please take a look at [senecajs.org][]. We have everything from tutorials to sample apps to help get you up and running quickly.

If you're using this module, and need help, you can:

- Post a [github issue][],
- Tweet to [@senecajs][],
- Ask on the [Gitter][gitter-url].


## Install
To install, simply use npm. Remember you will need to install [Seneca.js][] if you haven't already.

```sh
npm install seneca
npm install seneca-skeleton
```

## Quick Example

```js
require('seneca')()
  .use('skeleton')
```

## Contributing
The [Senecajs org][] encourages open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License
Copyright Richard Rodger and other contributors 2015, Licensed under [MIT][].

[npm-badge]: https://badge.fury.io/js/seneca-skeleton.svg
[npm-url]: https://badge.fury.io/js/seneca-skeleton
[travis-badge]: https://travis-ci.org/maxired/seneca-skeleton.png?branch=master
[travis-url]: https://travis-ci.org/maxired/seneca-skeleton
[coveralls-badge]:https://coveralls.io/repos/maxired/seneca-skeleton/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/maxired/seneca-skeleton?branch=master
[david-badge]: https://david-dm.org/maxired/seneca-skeleton.svg
[david-url]: https://david-dm.org/maxired/seneca-skeleton
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[standard-badge]: https://raw.githubusercontent.com/feross/standard/master/badge.png
[standard-style]: https://github.com/feross/standard


[MIT]: ./LICENSE
[Senecajs org]: https://github.com/senecajs/
[senecajs.org]: http://senecajs.org/
[Seneca.js]: https://www.npmjs.com/package/seneca
[github issue]: https://github.com/maxired/seneca-skeleton/issues
[@senecajs]: http://twitter.com/senecajs
