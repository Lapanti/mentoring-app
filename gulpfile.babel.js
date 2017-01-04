import gulp from 'gulp';
import ts from 'gulp-typescript';
import webpack from 'webpack-stream';
import del from 'del';
import webpackConfig from './webpack.config.babel';

const tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', () => del(['dist']));

gulp.task('build:server', () => (
  gulp.src('src/server/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('dist/server'))
));

gulp.task('build:client', () => (
  gulp.src('src/client/**/*.ts')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/client/assets'))
));
