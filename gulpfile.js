const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('less', function () {
    const plugins = [autoprefixer()]

    return gulp
        .src('src/styles/themes/*-theme.less')
        .pipe(debug({ title: 'Less files:' }))
        .pipe(
            gulpless({
                javascriptEnabled: true,
                plugins: [new NpmImportPlugin({ prefix: '~' })],
            }),
        )
        .pipe(postcss(plugins))
        .pipe(
            csso({
                debug: true,
            }),
        )
        .pipe(gulp.dest('./public'))
})

gulp.task('watch', function () {
    gulp.watch('src/styles/themes/*-theme.less', gulp.series('less'));
});