import { series } from 'gulp'
import { deleteSync } from 'del'
import { pathConfig } from './config'
import { buildTheme } from './tasks/buildTheme'
import { buildModules } from './tasks/buildModules'
import { copyComponentsPackages } from './tasks/copy'

// 清除旧文件夹
export const clean = (done: any) => {
  deleteSync(pathConfig.buildOutput, { force: true })
  done()
}

export default series(
  clean,
  buildTheme,
  buildModules,
  copyComponentsPackages
)