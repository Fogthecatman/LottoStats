var gulp  = require('gulp');
var jade  = require('gulp-jade');
var sass  = require('gulp-sass');

/* JADE Tasks */
/* This task will seek all the jade files inside _jadefiles */
gulp.task('jade', function(){
	return gulp.src('_jadefiles/*.jade')
	.pipe(jade())
	.on('error', function(err){
		console.log(err);
		this.emit('end');
	})
	.pipe(gulp.dest('_includes'));
});

/* SASS Tasks */
/* This task will seek all scss files ancompile them */
gulp.task('sass', function(){
   return gulp.src('')                                // find source folder
          .pipe(sass.sync().on('error' sass.logError))
          .pipe(gulp.dest(''));                       //find destination folder
});

/*BR/**/

gulp.task('browser-sync', ['jade'], function() {
	browserSync({server: {baseDir: '_includes'}, injectChanges: true, });
});

/*This task reloads the web page*/
gulp.task('jade-reload', ['jade'], browserSync.reload);

gulp.task('css-reload', function() {
	return gulp.src('_includes')        //This line should have destination CSS file
});
