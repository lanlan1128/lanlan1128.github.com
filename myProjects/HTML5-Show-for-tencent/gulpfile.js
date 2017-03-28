var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 

gulp.task('minifycss', function() {
  return gulp.src('src/css/base.css')
    .pipe(gulp.dest('src/css'))
	.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
    .pipe(minifycss())
    .pipe(gulp.dest('src/css'))
});

gulp.task('minifyjs', function() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('src/js'))    //输出main.js到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('src/js'));  //输出
});

gulp.task('default',['minifycss','minifyjs'], function () {
   gulp.start('minifycss','minifyjs');
});