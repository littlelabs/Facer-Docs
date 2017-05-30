var gulp = require('gulp');
var stylemod = require('gulp-style-modules');
var sass = require('gulp-sass');

// // Wrap css files
// gulp.task("modularize-styles", function() {
//     gulp.src("./src/**/*.css")
//         .pipe(stylemod({
//             // All files will be named 'styles.html'
//             filename: "styles",
//             // Use '-css' suffix instead of '-styles' for module ids
//             moduleId: function(file) {
//                 return path.basename(file.path, path.extname(file.path)) + "-css";
//             }
//         }))
//         .pipe(gulp.dest("./src"));
// }



gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(stylemod())
    .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});