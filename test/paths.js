var assert = require('assert');

var Paths = require('../src/paths');

describe('Paths', function(){
	var paths = new Paths();

	describe('#cwd()', function(){
		it('should set without error', function(){
			paths.cwd(__dirname);

			assert.equal(__dirname, paths._cwd);
		});
	});
	describe('#add()', function(){
		it('should add without error', function(){
			path = paths.add('src', 'src');

			assert.equal('src', path);
			assert.equal('src', paths._map.src);
		});
	});
	describe('#config()', function(){
		it('should map without error', function(){
			assert.equal(__dirname, paths._cwd);
			assert.equal('src', paths._map.src);
		})
	});
	describe('#get()', function(){
		it('should return path', function(){
			assert.equal(paths._cwd + '/src', paths.get('src'));
		});
		it('should return fallback', function(){
			assert.equal('fallback', paths.get('unknown', 'fallback'));
		});
		it('should throw error', function(){
			assert.throws(function(){
				paths.get('unknown')
			}, Error, 'Access of undefined path unknown.');
		});
	});
});
