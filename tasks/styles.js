const { src, dest } = require('gulp');

const bulk = require("gulp-sass-bulk-importer");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const clean = require("gulp-clean-css");
const scss = require("gulp-sass")(require("sass"));
const bs = require('browser-sync');

module.exports = function styles() {
  return src("src/style/**/*.scss")
  .pipe(bulk())
  .pipe(scss({ outputStyle: "compressed" }))
  .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
  .pipe(clean())
  .pipe(concat("style.min.css"))
  .pipe(dest("build/css"))
  .pipe(bs.stream());
}