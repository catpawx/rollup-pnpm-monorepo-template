// rollup.config.js 配置文件
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist', // 输出文件路径
      format: 'es', // 指定输出格式为 ES Module
      sourcemap: true, // 生成 source maps
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs()],
}
