# node-paths

[![Build Status](https://travis-ci.org/tnRaro/node-paths.svg)](https://travis-ci.org/tnRaro/node-paths)

paths

# Installation

	$ npm install paths --save

# Usage

```js
var paths = require('paths');

paths({
	cwd: __dirname,
	src: 'src',
	dist: 'dist'
});

paths('src'); // __dirname + '/src'
```