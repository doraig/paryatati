var gulp = require('gulp'),
gulpsvg = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  mode: {
    css : {
      sprite: 'sprite.svg',
      render : {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('cleanSprite', function() {
  return del(['./app/temp/sprite','./app/assets/images/sprites'])
});
gulp.task('createSprite', ['cleanSprite'], function () {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(gulpsvg(config))
    .pipe(gulp.dest('./app/temp/sprite/'))
});
gulp.task('copyGraphic', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'))
});
gulp.task('endSprite', ['copyGraphic','copySprite'], function() {
  return del(['./app/temp/sprite'])
});
gulp.task('copySprite', ['createSprite'], function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'))
});

gulp.task('icons', ['cleanSprite','createSprite','copySprite', 'copyGraphic','endSprite']);
