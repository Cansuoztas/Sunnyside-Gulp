"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const csso = require('gulp-csso')
var minifyCSS= require('gulp-minify-css');
const concat =require('gulp-concat')
const sourcemaps =require('gulp-sourcemaps')




gulp.task('css',()=>{
    return gulp.src('./sass/**/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())

    .pipe(concat('style.css'))
    .pipe(gulp.dest('./Css'))
})


gulp.task('watch',()=>{
    gulp.watch('./sass/**/*.sass',gulp.series('css'))
})
gulp.task('default',gulp.series('watch','css'))