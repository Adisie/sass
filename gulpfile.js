

const {src,dest,watch,series} = require("gulp");

const sass = require("gulp-sass")(require("sass"));


function buildCSSs(){
    return src("./sass/index.scss")
      .pipe(sass())
      .pipe(dest("css"))
}


function trackChanges(){
    watch(["./sass/index.scss"],buildCSSs)
}

exports.default = series(buildCSSs,trackChanges)