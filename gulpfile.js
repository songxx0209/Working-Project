var gulp = require("gulp");
var ejs = require("gulp-ejs");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch'); // 只编译修改后的文件

var rev = require('gulp-rev');
var clean = require('gulp-clean');  // 删除文件
var connect = require('gulp-connect');  // 创建一个服务启动项目

var cleanCSS = require('gulp-clean-css');  // 压缩css文件
var rename = require("gulp-rename");  // 文件重命名
var less = require('gulp-less');  // 使用less
var path = require('path');

// less转换为css
gulp.task('less', function () {
  return gulp.src([ './less/*.less', './less/**/*.less', './less/*.css'])
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});


// css, js, image, 进行MD5命名并保存名字的json数据到rev文件夹
gulp.task('css', ['less'], function () {
    return gulp.src(['css/*.css', 'css/**/*.css'])
        .pipe(rev())
        .pipe(gulp.dest('temp/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});

gulp.task('scripts', function () {
    return gulp.src(['js/*.js', 'js/**/*.js'])
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

//  将ejs文件转换为html文件并保存到temp文件夹中
gulp.task('ejs', function(){
    return gulp.src(['templates/*.ejs','!./templates/footer.ejs', '!./templates/header.ejs', '!./templates/subnav.ejs'])
        .pipe(ejs({}, {}, {ext: '.html'}))
        .pipe( gulp.dest('temp/templates') );
})

var revCollector = require('gulp-rev-collector');  // 转换文件中所有引用路径（md5命名的文件）
var minifyHTML   = require('gulp-minify-html');  // 压缩html文件

gulp.task('rev-css', ['css', 'images'], function () {
    return gulp.src(['rev/**/*.json', 'temp/css/*.css', 'temp/css/**/*.css'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                '/images/': '/images/'
            }}))
        .pipe( gulp.dest('dist/css') );
});

gulp.task('rev-js', ['scripts', 'images'], function () {
    return gulp.src(['rev/**/*.json', 'temp/js/*.js', 'temp/js/**/*.js'])
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

gulp.task('del', function () {
    return gulp.src(['dist', 'temp', 'rev', 'css'], {read: false})
        .pipe(clean());
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

gulp.task('default', ['rev'], function() {
    gulp.start('connect', 'watched');
});

gulp.task('deploy',['del'], function(){
    gulp.start('rev');
})

gulp.task('watched', function () {
    gulp.watch('templates/*.ejs', ['reload']);
    gulp.watch(['less/*.less', 'less/**/*.less'], ['reload']);
    gulp.watch(['js/*.js', 'js/**/*.js'], ['reload']);
});




