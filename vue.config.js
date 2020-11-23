const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('@/components'))
            .set('views', resolve('@/views'))
            .set('assets', resolve('@/assets'))
            .set('network', resolve('@/network'))
            .set('common', resolve('@/common'))
    }
}