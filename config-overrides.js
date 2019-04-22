/**
 * 修改 react 配置
 */

const path = require('path')

// // 去console插件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// // gzip压缩插件
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

const { override, fixBabelImports, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra')

process.env.GENERATE_SOURCEMAP = false //去除生产环境的soureMap

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addDecoratorsLegacy(), //装饰器
    addWebpackAlias({ '@': path.resolve(__dirname, "src") })
)