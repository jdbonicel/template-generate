var gulp = require('gulp'),
	template = require('gulp-template-compile'),
	concat = require('gulp-concat'),
	minifyhtml = require('gulp-minify-html'),
	minify = require('gulp-minify-css');

var options = {};
options.tpl = {
  templateSettings: {
    // <%-escape%>
    // becomes {{{ }}}
    // between {{{ and }}} <p>hello</p> becomes &lt;p&gt;hello&lt;p&gt;
    escape:      /\{\{\{([\s\S]+?)\}\}\}/g,
    // <%evaluate%>
    // becomes {{# }}
    // {{# console.log("blah") }}
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,
    // <%=interpolate%>
    // becomes {{ }}
    // <b>hello</b> becomes <b>hello</b>
    interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,
    variable: 'o'
  },
  namespace: '_templates',
  name: function (file) {
    var f = file.relative;
    // remove extension
    f = f.substr(0, f.lastIndexOf('.')) || f;
    return f;
  }
};

options.minifyhtml = {
  loose: true
};

options.pkg = function() {
  return require('./package.json');
};

gulp.task('templates', function () {
    return gulp.src('./templates/*.html')
    .pipe(template(options.tpl).on('error', console.error.bind(console)))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['templates']);


