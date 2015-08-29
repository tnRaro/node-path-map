var assert = require('assert');

var pathMap = require('../index');

describe('index', function(){
	describe('usage', function(){
		it('should not throw error', function(){
			pathMap({
				cwd: __dirname,
				src: 'src',
				dist: 'dist'
			});

			assert.equal(__dirname+'/src', pathMap('src'));
			assert.equal(__dirname+'/dist', pathMap('dist'));
		});
	});
});