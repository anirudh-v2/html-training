var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = './sass/main.scss',
    cssDest = './css/';

gulp.task('styles', function(){
   return gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default',gulp.series(
    'styles'
))
// gulp.task('watch',function() {
//     gulp.watch(sassFiles,['styles']);
// });

