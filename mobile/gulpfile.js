var gulp = require("gulp");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch'); // 只编译修改后的文件

var rev = require('gulp-rev');
var clean = require('gulp-clean');  // 删除文件
var connect = require('gulp-connect');  // 创建一个服务启动项目

var cleanCSS = require('gulp-clean-css');  // 压缩css文件
var rename = require("gulp-rename");  // 文件重命名
var less = require('gulp-less');  // 使用less
var path = require('path');
const nunjucks = require('gulp-nunjucks');

// less 转换为 css 放入 temp/lessCompiledCSS
gulp.task('less', function () {
  return gulp.src([ './less/*.less', './less/**/*.less'])
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('temp/lessCompiledCSS'));
});


// css, js, image, 进行MD5命名并保存名字的json数据到rev文件夹 --start
gulp.task('css', ['less'], function () {
    return gulp.src(['temp/lessCompiledCSS/*.css', 'temp/lessCompiledCSS/**/*.css'])
        .pipe(rev())
        .pipe( gulp.dest('temp/css') )
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'temp/rev/css' ) );
});

gulp.task('scripts', function () {
    return gulp.src(['js/*.js', 'js/**/*.js'])
        .pipe(rev())
        // .pipe(uglify())
        .pipe(gulp.dest('temp/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'temp/rev/js' ) );
});

gulp.task('images', function () {
    return gulp.src('images/**/*.*')
        .pipe(rev())
        .pipe(gulp.dest('dist/images'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'temp/rev/images' ) );
});

gulp.task('html', function(){
    return gulp.src(['templates/*.html'])
        .pipe(nunjucks.compile())
        .pipe( gulp.dest('temp/templates') );
})

var revCollector = require('gulp-rev-collector');  // 转换文件中所有引用路径（md5命名的文件）
var minifyHTML   = require('gulp-minify-html');  // 压缩html文件

gulp.task('rev-css', ['css', 'images'], function () {
    return gulp.src(['temp/rev/**/*.json', 'temp/css/*.css', 'temp/css/**/*.css'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/images/': '/images/'
            }}))
        .pipe( gulp.dest('dist/css') );
});

gulp.task('rev-js', ['scripts', 'images'], function () {
    return gulp.src(['temp/rev/**/*.json', 'temp/js/*.js', 'temp/js/**/*.js'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/images/': './images/'
            }}))
        .pipe( gulp.dest('dist/js') );
});

gulp.task('rev', ['rev-css', 'rev-js', 'html'], function () {
    return gulp.src(['temp/rev/**/*.json', 'temp/templates/*.html', 'temp/templates/**/*.html'])
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
    

// 删除临时目录
gulp.task('del', function () {
    return gulp.src(['dist', 'temp'], {read: false})
        .pipe(clean());
});

gulp.task('reload', ['rev', 'assets'], function(){
    return gulp.src('./dist/templates/*.html').pipe(connect.reload());
});

gulp.task('assets', function(){
    return gulp.src('src/**').pipe(gulp.dest('dist/src'));
});

gulp.task('default', ['rev', 'assets'], function() {
    gulp.start('connect', 'watched');
});

gulp.task('dist', ['del'], function(){
    gulp.start('rev');
})

gulp.task('watched', function () {
    gulp.watch('templates/*.html', ['reload']);
    gulp.watch(['less/*.less', 'less/**/*.less'], ['reload']);
    gulp.watch(['js/*.js', 'js/**/*.js'], ['reload']);
});


gulp.task('connect', function() {
  connect.server({
    root: ['dist/templates', 'dist'],
    livereload: true,
    port: 8888,
    host: '0.0.0.0' 
  });
});

