
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('combineJS', function() {
    return gulp.src('js/components/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('watch', function() {
    gulp.watch('js/components/*.js',gulp.series('combineJS'));
});

gulp.task('default',gulp.series('combineJS', 'watch'));