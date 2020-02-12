'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat-util');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const injectCSS = require('gulp-inject-css');
const autoprefixer = require('autoprefixer');

sass.compiler = require('node-sass');
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var postcssOptions = [
    autoprefixer()
];

gulp.task('sass', function () {
    return gulp.src(['./main.scss'])
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(postcss(postcssOptions))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('html', gulp.series('sass', function () {
    return gulp.src('watercolor.html')
        .pipe(injectCSS())
        .pipe(gulp.dest('./dist/'));
}));

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

gulp.task('default', gulp.series('sass', 'html', 'js'));
