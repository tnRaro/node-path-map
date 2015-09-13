var assert = require('assert');

var PathPack = require('../src/path-pack');

describe('PathPack', function(){
	var pathPack = new PathPack();

	describe('#cwd()', function(){
		it('should set without error', function(){
			pathPack.cwd(__dirname);

			assert.equal(__dirname, pathPack._cwd);
		});
	});
	describe('#add()', function(){
		it('should add without error', function(){
			path = pathPack.add('src', 'src');

			assert.equal('src', path);
			assert.equal('src', pathPack._map.src);
		});
	});
	describe('#config()', function(){
		it('should map without error', function(){
			assert.equal(__dirname, pathPack._cwd);
			assert.equal('src', pathPack._map.src);
		})
	});
	describe('#get()', function(){
		it('should return path', function(){
			assert.equal(pathPack._cwd + '/src', pathPack.get('src'));
		});
		it('should return fallback', function(){
			assert.equal('fallback', pathPack.get('unknown', 'fallback'));
		});
		it('should throw error', function(){
			assert.throws(function(){
				pathPack.get('unknown')
			}, Error, 'Access of undefined path unknown.');
		});
	});
	describe('#join()', function(){
		it('should join', function(){
			assert.equal(pathPack._cwd + '/foo/bar/baz/asdf', pathPack.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
		});
		it('should throw error', function(){
			assert.throws(function(){
				pathPack.join('foo', {}, 'bar')
			}, TypeError, 'Arguments to path.join must be strings');
		});
	});
});
