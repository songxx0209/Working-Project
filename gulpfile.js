var ejs = require("gulp-ejs")
var gulp = require("gulp")
var uglify = require('gulp-uglify');

var gulp = require('gulp');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var connect = require('gulp-connect');


gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('temp/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(rev())
        // .pipe(uglify())
        .pipe(gulp.dest('temp/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});

gulp.task('images', function () {
    return gulp.src('images/**/*.*')
        .pipe(rev())
        .pipe(gulp.dest('dist/images'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/images' ) );
});

gulp.task('ejs', function(){
    return gulp.src(['templates/*.ejs'])
        .pipe(ejs({
        }, {}, {ext: '.html'}))
        .pipe( gulp.dest('temp/templates') );
})

var revCollector = require('gulp-rev-collector');
var minifyHTML   = require('gulp-minify-html');

gulp.task('rev-css', ['css', 'images'], function () {
    return gulp.src(['rev/**/*.json', 'temp/css/*.css'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/images/': '/images/'
            }}))
        .pipe( gulp.dest('dist/css') );
});

gulp.task('rev-js', ['scripts', 'images'], function () {
    return gulp.src(['rev/**/*.json', 'temp/js/*.js'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/images/': './images/'
            }}))
        .pipe( gulp.dest('dist/js') );
});


gulp.task('rev', ['rev-css', 'rev-js', 'ejs'], function () {
    return gulp.src(['rev/**/*.json', 'temp/templates/*.html'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/css/': './css/',
                '/js/': './js/',
                '/images/': './images/'
            }
        }) )
        .pipe( minifyHTML({
                empty:true,
                spare:true
            }) )
        .pipe( gulp.dest('dist/templates') );
});

gulp.task('reload', ['rev'], function(){
    return gulp.src('./dist/templates/*.html').pipe(connect.reload());
})


gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});


gulp.task('default', ['rev', 'connect', 'watch'], function() {
    return gulp.src('temp')
        .pipe(clean({}))

});

gulp.task('deploy', ['rev'], function(){
    return gulp.src('temp')
        .pipe(clean({}))
})

gulp.task('watch', function () {

    gulp.watch('templates/*.ejs', ['reload']);
    gulp.watch('css/*.css', ['reload']);
    gulp.watch('js/*.js', ['reload']);
});




