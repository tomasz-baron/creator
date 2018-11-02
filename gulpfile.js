const connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	del = require('del'),
	gulp = require('gulp'),
	babel = require('gulp-babel'),
	runSequence = require('gulp-run-sequence'),
	concat = require('gulp-concat'),
	Server = require('karma').Server;
    
gulp.task('connect', function() {
	connect.server({
		port: 8000,
		livereload: true,
		root: ['./']
	});
});

gulp.task('clean', function() {
	return del('build');
});

gulp.task('scripts', function() {
	return gulp
    	.src(['src/**/*.js'])
		.pipe(babel({
            presets: ['@babel/env']
        }))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
	return gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./build'));
});

gulp.task('karma', function (done) {
	new Server({
	  configFile: __dirname + '/karma.conf.js',
	  singleRun: true
	}, done).start();
});

gulp.task('test', function() {
	runSequence('clean', 'scripts', 'sass', 'karma');
});

gulp.task('default', function() {
  	runSequence('clean', 'scripts', 'sass', 'connect');
});
