var gulp = require('gulp'),
	less = require('gulp-less'),
	del = require('del');

var path = {
	less: './less/*.less',
	dist: './dist',
	mindist: './dist/grid.min.css'
}

gulp.task('clean', function(cb) {
  del(['default'], cb);
});

gulp.task('less', ['clean'], function () {
  return gulp.src(path.less)
    .pipe(less())
    .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function() {
  gulp.watch(path.less, ['less']);
});

gulp.task('default', ['less']);
