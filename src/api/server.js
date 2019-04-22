/**
 * API文档 match代表其 controller 层 如 登录API -> /user/login
 */

export default {
    user: {
        login: '/user/login',
        register: '/user/register',
        logout: '/user/logout'
    },
    permission: {
        query: '/permission/selectByCondition',
        create: '/permission/insert',
        update: '/permission/update'
    }
}