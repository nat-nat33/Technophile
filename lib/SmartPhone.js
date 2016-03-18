var Phone= require("./Phone.js");
var Tablet= require('./Tablet.js');
var GameConsole= require('./GameConsole.js');
var WebBrowser= require('./WebBrowser.js');
var extend= require('./extend.js');



function SmartPhone(phoneNumber){
	Phone.call(this, phoneNumber);
	Tablet.call(this);
	GameConsole.call(this, 'Smart Phone');
	WebBrowser.call(this);
}


extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);


module.exports = SmartPhone;



