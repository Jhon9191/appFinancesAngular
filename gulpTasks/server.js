const { src, watch } = require('gulp');
const webserver = require('gulp-webserver');
const { appCSS, appHTML, appJS, appAssets } = require('./app');


function watchChanges(cb) {
    watch('app/**/*.html', {}, appHTML);
    watch('app/**/*.css', {},appCSS);
    watch('app/**/*.js', appJS);
    watch('assets/**/*.*', appAssets);
}

function server() {
    return src('public')
        .pipe(webserver({
            livereload: true,
            port: 3333,
            open: true
        }));
}

module.exports = {
    watchChanges,
    server
};