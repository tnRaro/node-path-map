var Paths = require('./src/paths');

var instance;

module.exports = function(arg){
	if(!instance)
		instance = new Paths();
	
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
