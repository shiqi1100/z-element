import path from 'path'

const ROOT = path.resolve(__dirname, '..')
const PKG_NAME = 'my-element'

const buildOutput = path.resolve(ROOT, 'dist')

export const pathConfig = {
  ROOT,
  PKG_NAME,
  buildOutput,
  pkgRoot: path.resolve(ROOT, 'packages'),
  exportRoot: path.resolve(buildOutput, PKG_NAME)
}
