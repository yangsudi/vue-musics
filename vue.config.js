
const path = require('path')

// 获取文件相对路径
function resolve (folderName) {
  return path.join(__dirname, folderName)
}
module.exports = {
  productionSourceMap: false, // 生产上不开启source map
  devServer: {
    port: 4000
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  }
}
