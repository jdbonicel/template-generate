var _templates = window["_templates"];


domready(function () {


	/*
	*
	* HEADER -
	*/
	var header = new Ui();
	header.name = 'header';
		header.context = {
		title:'hello world!'
	};
	header.set();

	/*
	*
	* CONTENT -
	*/
	var content = new Ui();
	content.name = 'content';
		content.context = {
		content1: 'content1',
		content2: 'content2'
	};
	content.set();

	/*
	*
	* FOOTER -
	*/
	var footer = new Ui();
	footer.name = 'footer';
	footer.context = {
		footer: 'footer here'
	};
	footer.set();

});