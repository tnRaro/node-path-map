var PathMap = require('./src/path-map');

var instance;

module.exports = function(arg){
	if(!instance)
		instance = new PathMap();
	
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