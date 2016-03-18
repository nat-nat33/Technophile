var Watch= require('./Watch.js');
var Tablet= require('./Tablet.js');
var extend = require('./extend.js');

function SmartWatch(){
	Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;