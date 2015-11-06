var _templates = window["_templates"];


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