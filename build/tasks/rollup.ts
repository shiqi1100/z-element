import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'


export const genPlugins = () => {
  return [
    vue({
      isProduction: true
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    esbuild({
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts'
      },
      minify: false,
      treeShaking: false,
      legalComments: 'eof',
    }),      
  ]
}