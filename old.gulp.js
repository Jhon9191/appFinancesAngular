const { series, parallel } = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

const { appAssets, appCSS, appHTML, appJS } = require('./gulpTasks/app');
const { depsCSS, depsFonts, depsJS } = require('./gulpTasks/deps');
const { server, watch } = require('./gulpTasks/server');

module.exports.default = series(
    parallel(
        series(appAssets, appCSS, appHTML, appJS),
        series(depsCSS, depsFonts, depsJS),
    ),
    server,
    watch
)
