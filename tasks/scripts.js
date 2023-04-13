const { src, dest } = require('gulp');

const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const bs = require('browser-sync');

module.exports = function scripts() {
  return src("src/js/**/*.js")
  .pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(dest("build/js"))
  .pipe(bs.stream());
}