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
	.pipe(gulp.dest('_includes/pages'));
});

/* SASS Tasks */
/* This task will seek all scss files ancompile them */
gulp.task('sass', function(){
   return gulp.src('stylesheets/_main.scss')                                // find source folder
          .pipe(sass.sync().on('error', sass.logError))
          .pipe(gulp.dest('_includes/css/styles.css'));                       //find destination folder
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

gulp.task('watch', function () {
    gulp.watch('_jadefiles/**/*.jade', ['jade', 'jade-reload']);
		gulp.watch('_includes/css/styles.css', ['css-reload']);
});

gulp.task('default', ['watch', 'jade', 'browser-sync', 'sass']);
