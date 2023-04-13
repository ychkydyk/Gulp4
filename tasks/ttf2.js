const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const ttf2woff2  = require('gulp-ttf2woff2');

module.exports = function ttf2(done) {
  return src('src/fonts/**/*.ttf')
  .pipe(changed('build/fonts', {
    extension: '.woff2',
    hasChanged: changed.compareLastModifiedTime
  }))
  .pipe(ttf2woff2())
  .pipe(dest('build/fonts'))
  done();
}