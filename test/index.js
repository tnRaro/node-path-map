var assert = require('assert');

var pathPack = require('../index');

describe('index', function(){
	describe('usage', function(){
		it('should not throw error', function(){
			pathPack({
				cwd: __dirname,
				src: 'src',
				dist: 'dist'
			});

			assert.equal(__dirname+'/src', pathPack('src'));
			assert.equal(__dirname+'/dist', pathPack('dist'));
		});
	});
});
