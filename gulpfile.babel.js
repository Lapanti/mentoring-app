import gulp from 'gulp';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';
import sourcemaps from 'gulp-sourcemaps';
import typescript from 'gulp-typescript';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import del from 'del';

gulp.task('clean', () => del([
  'dist/public/assets',
  'dist/**/*.js',
  'dist/**/*.d.ts',
  'build',
]));

gulp.task('build:client', () => (
  gulp.src('src/client/**/*.ts')
    .pipe(typescript.createProject('tsconfig.json')())
    .pipe(gulp.dest('build/client'))
));

gulp.task('build:server', () => (
  gulp.src('src/server/**/*.ts')
    .pipe(typescript.createProject('tsconfig.json')())
    .pipe(gulp.dest('dist/server'))
));

gulp.task('bundle:client', ['build:client'], () => {
  const b = browserify('build/client/app.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/public/assets/js'))
});

gulp.task('serve:server', ['build:server'], () => (
  nodemon({
    script: 'dist/server/server.js',
    env: { NODE_ENV: 'development' },
    watch: ['src/server'],
    ext: 'ts',
    tasks: ['build:server'],
  }).on('restart', () => {
    setTimeout(() => {
      livereload.changed('dist/server/server.js');
    }, 1000);
  })
));

gulp.task('watch', ['bundle:client', 'serve:server'], () => {
  livereload.listen();
  gulp.watch('src/client/**/*.ts', ['bundle:client']);
})

gulp.task('default', ['watch']);
