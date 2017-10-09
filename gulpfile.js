const gulp = require('gulp');
const concat = require('gulp-concat-util');
const uglify = require('gulp-uglify');
const injectSVG = require('gulp-inject-svg');
const injectCSS = require('gulp-inject-css');

gulp.task('html', function () {
    return gulp.src('watercolor.html')
        .pipe(injectSVG())
        .pipe(injectCSS())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function () {
    var libs = [
        './node_modules/timeago.js/dist/timeago.js',
        './node_modules/masonry-layout/dist/masonry.pkgd.js',
        './node_modules/imagesloaded/imagesloaded.pkgd.js'
    ];

    return gulp.src(libs)
        .pipe(concat.scripts('dist.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['html', 'js']);
