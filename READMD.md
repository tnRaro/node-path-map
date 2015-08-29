# node-path-map

[![Build Status](https://travis-ci.org/tnRaro/node-path-map.svg)](https://travis-ci.org/tnRaro/node-path-map)

path map

$ Usage

```js
var pathMap = require('path-map');

pathMap({
	cwd: __dirname,
	src: 'src',
	dist: 'dist'
});

pathMap('src'); // __dirname + '/src'
```