'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import gutil from 'gulp-util';

gulp.task('mocha', () => {
	return gulp.src(['test/*.js'], {read:false})
	.pipe(mocha({reporter: 'list'}))
	.on('error', gutil.log);
});

gulp.task('watch-mocha', ['mocha'], () => {
	gulp.watch(['test/*.js'], ['mocha']);
});

gulp.task('default', ['watch-mocha']);
