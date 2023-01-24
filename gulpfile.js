"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass',()=>{
return gulp.src('./sass/**/*.sass')
.pipe(sass())
.pipe(gulp.dest('./css'))
})

gulp.task('watch',()=>{
    gulp.watch('./sass/**/*.sass',gulp.series('sass'))
})
 
gulp.task('default',gulp.series('watch'))