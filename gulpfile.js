"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var minifyCSS= require('gulp-minify-css');
const concat =require('gulp-concat')
const uglify= require('gulp-uglify')


gulp.task('css',()=>{
    return gulp.src('./sass/**/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('js',()=>{
    return gulp.src('./Js/**/*js')
    .pipe(uglify())
    .pipe(concat('style.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch',()=>{
    gulp.watch('./sass/**/*.sass',gulp.series('css'))
    gulp.watch('./Js/*js',gulp.series('js'))
})


gulp.task('default',gulp.series('watch','css','js'))