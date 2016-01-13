var gulp        = require('gulp');
var jade        = require('gulp-jade');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');

/* JADE Tasks */
/* This task will seek all the jade files inside _jadefiles */
gulp.task('jade', function(){
	return gulp.src('_jadefiles/*.jade')
	.pipe(jade())
	.on('error', function(err){
		console.log(err);
		this.emit('end');
	})
	.pipe(gulp.dest('_includes/'));
});

/* SASS Tasks */
/* This task will seek all scss files ancompile them */
gulp.task('sass', function(){
   return gulp.src('stylesheets/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('_includes/css'));
});

/*BR/**/

gulp.task('browser-sync', ['jade'], function() {
	browserSync({server: {baseDir: '_includes'}, injectChanges: true, });
});

/*This task reloads the web page*/
gulp.task('jade-reload', ['jade'], browserSync.reload);

gulp.task('css-reload', function () {
	return gulp.src('_includes/css/styles.css')
	.pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task("sass:watch", function(){
		gulp.watch('./stylesheets/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
    gulp.watch('_jadefiles/**/*.jade', ['jade', 'jade-reload']);
		gulp.watch('stylesheets/**/*.scss', ['sass', 'css-reload']);
});

gulp.task('default', ['watch', 'jade', 'browser-sync', 'sass']);
