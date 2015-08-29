var PathPack = require('./src/path-pack');

var instance;

module.exports = function(arg){
	if(!instance)
		instance = new PathPack();
	
	switch(typeof arg){
		case 'object':
			instance.config(arg);
			break;
		case 'string':
			return instance.get(arg);
			break;
	}
	return instance;
}
