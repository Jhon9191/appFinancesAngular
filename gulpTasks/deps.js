const gulp = require('gulp');
const uglify = require('gulp-uglify')
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');


gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts']);

gulp.task('deps.css', ()=>{
    return gulp.src[(
        '...'
    )]
});

gulp.task('deps.js', ()=>{

});

gulp.task('deps.fonts', ()=>{

});