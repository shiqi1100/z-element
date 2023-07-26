import path from 'path'
import glob from 'fast-glob'
import { rollup } from 'rollup'
import type { OutputOptions, InputPluginOption } from 'rollup'
import { pathConfig } from '../config'
import { genPlugins } from './rollup'

const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(pathConfig.exportRoot, 'es')
    },
    bundle: {
      path: `${pathConfig.PKG_NAME}/es`
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(pathConfig.exportRoot, 'lib')
    },
    bundle: {
      path: `${pathConfig.PKG_NAME}/lib`
    }
  }
}

export const buildModules = async () => {
  const input = await glob('**/*.{js,ts,vue}', {
    cwd: pathConfig.pkgRoot,
    absolute: true,
    onlyFiles: true
  })

  const bundle = await rollup({
    input,
    plugins: genPlugins() as InputPluginOption[],
    external(id) {
      return /^vue/.test(id)
    },
    treeshake: false
  })

  const options = Object.entries(buildConfig).map(([module, config]): OutputOptions => {
    return {
      format: config.format as any,
      dir: config.output.path,
      exports: module === 'cjs' ? 'named' : undefined,
      preserveModules: true,
      preserveModulesRoot: pathConfig.pkgRoot,
      sourcemap: true,
      entryFileNames: `[name].${config.ext}`
    }
  })

  await Promise.all(
    options.map((option) => {
      return bundle.write(option)
    })
  )
}
