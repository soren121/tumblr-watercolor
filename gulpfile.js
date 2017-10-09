const gulp = require('gulp');
const concat = require('gulp-concat');
const injectSVG = require('gulp-inject-svg');
const injectCSS = require('gulp-inject-css');

gulp.task('html', function () {
    return gulp.src('watercolor.html')
        .pipe(injectSVG())
        .pipe(injectCSS())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/timeago.js/dist/timeago.min.js',
        './node_modules/svg4everybody/dist/svg4everybody.min.js',
        './node_modules/masonry-layout/dist/masonry.pkgd.min.js',
        './node_modules/imagesloaded/imagesloaded.pkgd.min.js'
    ]).pipe(concat('dist.js')).pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['html', 'js']);
