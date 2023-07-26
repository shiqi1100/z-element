import { resolve, join } from 'path'
import { copyFile } from 'fs-extra'
import { pathConfig } from '../config'

export const copyComponentsPackages = () => {
  return copyFile(resolve(pathConfig.pkgRoot, 'package.json'), join(pathConfig.exportRoot, 'package.json'))
}
