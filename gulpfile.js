"use strict";

// const gulp = require('gulp');
// const sass = require('gulp-sass');

// sass.compiler=require("node-sass");
// gulp.task("sass",function(){
//     return gulp.src("./sass/**/*.sass")
//         .pipe(sass().on("error",sass.logError))
//         .pipe(gulp.dest("./css"))
        
    
// })
// const sass = require('gulp-sass')(require('sass'));
// sass.compiler=require("node-sass")
// gulp.task('sass', () => (
//     gulp.src('./sass/**/*.sass')
//          .pipe(sass())
//          .pipe(concat('style.css'))
//          .pipe(gulp.dest('./css'))
// ))

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass',()=>{
return gulp.src('./sass/**/*.sass')
.pipe(sass())
.pipe(gulp.dest('./css/style.css'))
})

gulp.task('watch',()=>{
    gulp.watch('./sass/**/*.sass',gulp.series('sass'))
})

gulp.task('default',gulp.series('watch'))