/**
 * tool工具类 by jdes on 2019-04-23
 */


/**
 * 将 树形结构 转化 为 List
 */
export function __ToList(data) {
    var result = []
    data.forEach(row => {
        if (row.children && row.children.length > 0) return __ToList(row.children)
        result.push(row)
    })
    return result
}

/**
 * 将List转化为tree
 */

export function __ToTree(data, perKey) {
    var map = {}
    /**
     * 预处理,生成一个以id为主键的map便于后续查找
     */
    data.forEach(item => {
        map[item.id] = item
    })

    /**
     * 生成tree结构
     */

    var result = []

    data.forEach(row => {
        var parent = map[row[perKey]] //查找当前数据的pid,即父元素在不在，如果在证明他是子集，扔进该元素的children中即可，否则扔进顶级
        if (parent) {
            (parent.children || (parent.children = [])).push(row)
        } else {
            result.push(row)
        }
    })
    return result
}


/**
 * 添加 0 
 */

export function __num(num) {
    return num < 10 ? '0' + num : num
}

/**
 * 时间格式转化
 */

export function __Time(date) {
    let Y = date.getFullYear() // 年
    let m = __num(date.getMonth() + 1) // 月
    let d = __num(date.getDate()) // 日
    let h = __num(date.getHours()) // 时
    let i = __num(date.getMinutes()) // 分
    let s = __num(date.getSeconds()) // 秒
    return Y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
}

/**
 * 单次执行函数
 * @param {传入的函数} fn 
 */

export const __Once = fn => {
    let done = false
    return function () {
        return done ? undefined : ((done = true), fn.apply(this, arguments))
    }
}

/**
 * 防抖函数
 * @param method 事件触发的操作,fn
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export function __Debounce(method, delay = 500) {
    let timer = null;
    return function () {
        let self = this,
            args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function () {
            method.apply(self, args)
        }, delay)
    }
}

/**
 * 节流函数
 * @param method 事件触发的操作,fn
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 */
export function __Throttle(method, mustRunDelay = 500) {
    let timer,
        args = arguments,
        start
    return function loop() {
        let self = this
        let now = Date.now()
        if (!start) {
            start = now
        }
        if (timer) {
            clearTimeout(timer)
        }
        if (now - start >= mustRunDelay) {
            method.apply(self, args);
            start = now
        } else {
            timer = setTimeout(function () {
                loop.apply(self, args)
            }, 50)
        }
    }
}