/* jslint node: true */
/* global _templates:true, Ui:true, document:true */

"use strict";
/*
* Ui CLASS -
*/

Ui = function(){
	this.name = '';
	this. context ={};
};

Ui.prototype.set = function() {	
	var render = this.render();
	var element = document.querySelector('#'+this.name);
	element.innerHTML = render;
};


Ui.prototype.render = function() {
	if(typeof _templates[this.name] === 'undefined') {
		throw 'UI: undefined template "' + this.name + '"';
	}
	return _templates[this.name](this.context);
};



Ui.prototype.hide = function () {
	var element = document.querySelector('#'+this.name);
	element.style.display = "none";
};


Ui.prototype.show = function () {
	var element = document.querySelector('#'+this.name);
	element.style.display = "block";
};
