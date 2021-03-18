const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function appHTML() {
    return src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('public'));
}

function appCSS(cb) {
    return src('app/**/*.css')
        .pipe(uglifyCss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(dest('public/assets/css'))
}

function appJS(cb) {
    return src('app/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(dest('public/assets/js'))
}

function appAssets(cb) {
    return src('assets/**/*.*')
        .pipe(dest('public/assets'))
}

module.exports = { appHTML, appCSS, appJS, appAssets };