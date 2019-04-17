/**
 * 修改 react 配置
 */

const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra')

process.env.GENERATE_SOURCEMAP = false //去除生产环境的soureMap

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addDecoratorsLegacy() //装饰器
)