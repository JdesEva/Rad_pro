/**
 * API文档 match代表其 controller 层 如 登录API -> /user/login
 */

export default {
    user: {
        login: '/user/login',
        register: '/user/register',
        logout: '/user/logout',
        query: '/user/selectByCondition'
    },
    permission: {
        query: '/permission/selectByCondition',
        create: '/permission/insert',
        update: '/permission/update',
        createFst: '/permission/insertRoot',
        delete: '/permission/delete'
    }
}