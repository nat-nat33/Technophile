var GameConsole= require('./GameConsole.js');
var WebBrowser= require('./WebBrowser.js');
var extend = require('./extend.js');

function NintendoDS(){
	GameConsole.call(this, "Nintendo DS");
}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;