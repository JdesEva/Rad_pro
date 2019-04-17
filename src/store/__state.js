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
    if (!v) v = __initVal
    switch (type) {
        case 'object':
            return JSON.parse(v)
        case 'number':
            return v + 0
        case 'boolean':
            return v === 'true'
        default:
            return v === 'null' ? null : v
    }
}


export default {
    counter: mapSessionToState('counter', 100, 'number'),
    todos: [1, 2, 3, 4],
    token: mapSessionToState('token', null)
}