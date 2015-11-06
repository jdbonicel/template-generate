var _templates = window["_templates"];

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

domready(function () {

	/*
	*
	* HEADER -
	*/
	var header = new ui;
	header.name = 'header';
	header.context =  {
	title:'hello world!'
	};
	header.set();

	/*
	*
	* CONTENT -
	*/
	var content = new ui;
	content.name = 'content';
	content.context =  {
	content1: 'content1',
	content2: 'content2'
	};
	content.set();

	/*
	*
	* FOOTER -
	*/
	var content = new ui;
	content.name = 'footer';
	content.context =  {
	footer: 'footer here'
	};
	content.set();

})
