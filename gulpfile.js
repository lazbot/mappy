var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");

var paths = {
    mappy: {
        src: [
            'css/*.css',
        ],
        dist: 'dist/css',
        maps: '.'
    }
  };

  gulp.task('mappy', function (){
    return gulp.src(paths.mappy.src)
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.mappy.dist));
});

gulp.task('watch', function (){
  gulp.watch(paths.mappy.src, ['mappy']);
});
gulp.task('default', ['watch']);
