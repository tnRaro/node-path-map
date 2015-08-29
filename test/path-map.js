var assert = require('assert');

var PathMap = require('../src/path-map');

describe('PathMap', function(){
	var pathMap = new PathMap();
	
	describe('#cwd()', function(){
		it('should set without error', function(){
			pathMap.cwd(__dirname);
			
			assert.equal(__dirname, pathMap._cwd);
		});
	});
	describe('#add()', function(){
		it('should add without error', function(){
			path = pathMap.add('src', 'src');
			
			assert.equal('src', path);
			assert.equal('src', pathMap._map.src);
		});
	});
	describe('#config()', function(){
		it('should map without error', function(){
			assert.equal(__dirname, pathMap._cwd);
			assert.equal('src', pathMap._map.src);
		})
	});
	describe('#get()', function(){
		it('should return path', function(){
			assert.equal(pathMap._cwd + '/src', pathMap.get('src'));
		});
		it('should return fallback', function(){
			assert.equal('fallback', pathMap.get('unknown', 'fallback'));
		});
		it('should throw error', function(){
			assert.throws(function(){
				pathMap.get('unknown')
			}, Error, 'Access of undefined path unknown.');
		});
	});
});