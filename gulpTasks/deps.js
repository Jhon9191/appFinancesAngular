const { src, dest } = require('gulp');
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function depsJS(cb) {
    return src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(dest('public/assets/js'));
}

function depsCSS(cb) {
    return src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.min.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css'
    ])
    .pipe(uglifyCss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(dest('public/assets/css'));
}


function depsFonts() {
    return src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
    .pipe(dest('public/assets/fonts'))
}

module.exports = {
    depsFonts,
    depsCSS,
    depsJS
}
