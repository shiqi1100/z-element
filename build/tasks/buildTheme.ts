import path from 'path'
import { src, dest, parallel } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'

// 基础方法
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import { pathConfig } from '../config'

const sass = gulpSass(dartSass)

const config = {
  input: path.resolve(pathConfig.pkgRoot, 'theme'),
  output: path.resolve(pathConfig.exportRoot, 'theme')
}

const compileSCSS = () =>
  src(path.resolve(__dirname, `${config.input}/*.scss`))
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(
      cleanCSS({}, (details: Record<string, any>) => {
        console.log(`origin:${details.stats.originalSize / 1000}KB`)
        console.log(`after:${details.stats.minifiedSize / 1000}KB`)
      })
    )
    .pipe(dest(config.output))

export const buildTheme = parallel(compileSCSS)
