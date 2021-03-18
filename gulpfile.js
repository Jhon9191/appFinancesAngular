const gulp = require('gulp');
const { series, parallel } = require('gulp');

const { appAssets, appCSS, appHTML, appJS } = require('./gulpTasks/app');
const { depsCSS, depsFonts, depsJS } = require('./gulpTasks/deps');
const { server, watchChanges } = require('./gulpTasks/server');

module.exports.default = module.exports.default = series(
    parallel(
        parallel(appHTML, appCSS, appJS, appAssets),
        parallel(depsCSS, depsFonts, depsJS),
    ),
    series(server, watchChanges)
);
