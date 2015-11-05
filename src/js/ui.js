var ui = {}
var _templates = window["_templates"];


ui.set = function(view,context) {

	var render = this.render(view,context);
	var element = document.querySelector('#'+view);
	element.innerHTML = render;
};	


ui.hide = function (view) {
	var element = document.querySelector('#'+view);
	element.style.display = "none";
}


ui.show = function (view) {
	var element = document.querySelector('#'+view);
	element.style.display = "block";
}


ui.render = function(view,context) {
	if(typeof _templates[view] === 'undefined') {
		throw 'ui: undefined template "' + view + '"';
	}
	return _templates[view](context);
}


var header = {
	title:'hello world!'
}

var content = {
	content1: 'content1',
	content2: 'content2'
}

var footer = {
	footer: 'footer here'
}


domready(function () {
  ui.set('header',header);
  ui.set('content',content);
  ui.set('footer',footer);
})
