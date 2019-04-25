/**
 * redux state初始化数据
 */


/**
 * 本地储存辅助函数，用于取出本地存储的数据
 * @param {字段} key 
 * @param {初始值} __initVal 
 * @param {数据类型} type {object/number/boolean/string(null)}
 */

function mapSessionToState(key, __initVal, type = 'string') {
    var v = sessionStorage.getItem(key)
    if (!v) v = JSON.stringify(__initVal)
    switch (type) {
        case 'object':
            return JSON.parse(v)
        case 'number':
            return v * 1
        case 'boolean':
            return v === 'true'
        default:
            return v === 'null' ? null : v
    }
}


export default {
    token: mapSessionToState('token', null),
    http: mapSessionToState('http', {}, 'object'),
    menu: mapSessionToState('menu', { isCollapse: false, broken: false }, 'object'),
    drawer: mapSessionToState('drawer', { visible: true }, 'object'),
}