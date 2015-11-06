/*
* UI CLASS -
*/

ui = function(){
	this.name = '';
	this. context ={};
}

ui.prototype.set = function() {	
	var render = this.render();
	var element = document.querySelector('#'+this.name);
	element.innerHTML = render;
}


ui.prototype.render = function() {
	if(typeof _templates[this.name] === 'undefined') {
		throw 'ui: undefined template "' + this.name + '"';
	}
	return _templates[this.name](this.context);
}



ui.prototype.hide = function () {
	var element = document.querySelector('#'+this.name);
	element.style.display = "none";
}


ui.prototype.show = function () {
	var element = document.querySelector('#'+this.name);
	element.style.display = "block";
}
