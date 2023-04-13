const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.scripts = tasks.scripts;
exports.styles = tasks.styles;
exports.html = tasks.html;
exports.watch = tasks.watch;
exports.live_html = tasks.live_html;
exports.pic = tasks.pic;
exports.webp = tasks.webp;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.fonts = tasks.fonts;


exports.default = gulp.parallel(
  exports.scripts,
  exports.styles,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.pic,
  exports.webp,
  exports.html,
  exports.live_html,
  exports.watch,
)