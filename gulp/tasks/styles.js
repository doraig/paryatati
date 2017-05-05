var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvar = require('postcss-simple-vars'),
postcssnested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task("styles", function () {
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([ cssimport, mixins, cssvar, postcssnested, autoprefixer]))
  .on('error', function (errInfo) {
    console.log(errInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
