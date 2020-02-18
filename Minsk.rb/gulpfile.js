var gulp = require("gulp");
var scss = require("gulp-scss"),
    cssnano = require("gulp-cssnano"),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("html", function() {
    return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("scss", function() {
    return gulp.src("src/style.scss")
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
         }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('clearCache', function() {
    gulp.src('./lib/*.js')
    .pipe(cache.clear());
  });

gulp.task("watch", function() {
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/js/*.js", ["scripts"]);
    gulp.watch("src/scss/*.scss", ["scss"]);
});