var path = require('path');

function PathPack(config){
	this._map = {};
	this._cwd = process.cwd();

	if(config)
		this.config(config);
}

PathPack.prototype.config = function(config){
	for(var key in config){
		(function(value){
			switch(key){
				case 'cwd':
					this.cwd(value);
					break;
				default:
					this.add(key, value);
			};
		}).call(this, config[key], key);
	}
}

PathPack.prototype.add = function(name, path){
	return this._map[name] = path;
}

PathPack.prototype.cwd = function(name){
	return this._cwd = name || process.cwd();
}

PathPack.prototype.get = function(name, fallback){
	var ref = this._map[name];

	if(typeof ref !== 'undefined'){
		return path.join(this._cwd, ref);
	} else {
		if(fallback){
			return fallback;
		} else {
			throw new Error('Access of undefined path ' + name + '.');
		}
	}
}

module.exports = PathPack;
