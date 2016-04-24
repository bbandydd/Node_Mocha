var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	livereload = require('gulp-livereload')

gulp.task('default', function(){
	livereload.listen()

	nodemon({
		script: 'server.js',
		ext: 'js'
	})
	.on('restart', function(){
		gulp.src('app.js')
			.pipe(livereload())
	})
})