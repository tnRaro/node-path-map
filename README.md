# node-path-pack

[![Build Status](https://travis-ci.org/tnRaro/node-path-pack.svg)](https://travis-ci.org/tnRaro/node-path-pack)

pathPack

# Installation

	$ npm install path-pack --save

# Usage

```js
var pathPack = require('path-pack');

pathPack({
	cwd: __dirname,
	src: 'src',
	dist: 'dist'
});

pathPack('src'); // __dirname + '/src'
```