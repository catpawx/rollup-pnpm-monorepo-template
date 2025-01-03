# 说明

本模板项目, 用于开发类库项目，采取的编码模块化规范是es,打包格式为保留目录结构的es(相当于只做编译，不做打包到一个文件，方便按需引入)，还加入了debug，由于vscode中debug不能识别es模块，所以在dev包中也引入了umd模块

# 打包说明

1. 使用 rollup 打包, 打包命令: npm run build
2. 内置 typescript
3. 打包入口文件 src/index.ts

# 开发文件

1. 入口文件 src/index.ts, 建议开发内容都在 src 目录下
2. 打包后, 优先检查是否存在 dist/node_modules 目录, 在 rollup.config.js external 配置项中按需排除
