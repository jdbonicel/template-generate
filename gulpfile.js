var gulp = require('gulp'),
  template = require('gulp-template-compile'),
  concat = require('gulp-concat'),
  minifyhtml = require('gulp-minify-html'),
  minify = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify');

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
    .pipe(gulp.dest('./src/js/'));
});

gulp.task('concat-scripts', function() {
  return gulp.src(['./src/js/templates.js', './src/js/ui.js', './src/js/app.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('compress', function() {
  return gulp.src('dist/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('public_html/js/'));
});

// check code quality of certain files
gulp.task('hint', function() {
  var jshintConfig = options.pkg().jshintConfig;
  return gulp.src(['./src/js/ui.js'])
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));
});


gulp.task('default', ['hint','templates','concat-scripts','compress']);


