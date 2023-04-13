const { watch, parallel } = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.scss', parallel('styles'));
  watch('src/**/*.js', parallel('scripts'));
}