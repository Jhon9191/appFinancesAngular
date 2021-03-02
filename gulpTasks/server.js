const { equals } = require('angular');
const gulp = require('gulp');
const watch = require('gulp-watch');
const server = require('gulp-webserver');


gulp.task('watch', ()=>{
    watch('app/**/*.html', ()=>{gulp.start('app.html')});
    watch('app/**/*.css', ()=>{gulp.start('app.css')});
    watch('app/**/*.js', ()=>{gulp.start('app.js')});
    watch('assets/**/*.*', ()=>{gulp.start('app.assets')} )
});

gulp.task('server', ['watch'],()=>{
    return gulp.src('public').pipe(server({
        livereload: true,
        port: 3333,
        open: true
    }))
})