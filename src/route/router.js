/**
 * 路由配置文件
 */

import Loadable from 'react-loadable'

import Loading from '../components/Loading'


const Login = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Login'), loading: Loading })
const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'), loading: Loading })
const Index = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Index'), loading: Loading })
const ErrorPage_404 = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/ErrorPage/404'), loading: Loading })
const User = Loadable({ loader: () => import(/* webpackChunkName: "User" */ '../views/User'), loading: Loading })
const Register = Loadable({ loader: () => import(/* webpackChunkName: "Register" */ '../views/Register'), loading: Loading })
const Permission = Loadable({ loader: () => import(/* webpackChunkName: "Permission" */ '../views/Permission'), loading: Loading })
const Role = Loadable({ loader: () => import(/* webpackChunkName: "Role" */ '../views/Role/role'), loading: Loading })
const ErrorPage_500 = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/ErrorPage/500'), loading: Loading })
const Dictionary = Loadable({ loader: () => import(/* webpackChunkName: "Dictionary" */ '../views/Dictionary/dictionary'), loading: Loading })
const Location = Loadable({ loader: () => import(/* webpackChunkName: "Location" */ '../views/Location/location'), loading: Loading })
const Monitor = Loadable({ loader: () => import(/* webpackChunkName: "Monitor" */ '../views/Monitor/Monitor'), loading: Loading })
const Workplace = Loadable({ loader: () => import(/* webpackChunkName: "Workplace" */ '../views/Workplace/workplace'), loading: Loading })

export default [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/dashboard',
    component: Home,
    children: [{
        path: 'index',
        component: Index
    }, {
        path: 'monitor',
        component: Monitor
    }, {
        path: 'workplace',
        component: Workplace
    }, {
        path: '*',
        component: ErrorPage_404
    }]
}, {
    path: '/setting',
    component: Home,
    children: [{
        path: 'user',
        component: User
    }, {
        path: 'permission',
        component: Permission
    }, {
        path: 'role',
        component: Role
    }, {
        path: '*',
        component: ErrorPage_404
    }]
}, {
    path: '/alert',
    component: Home,
    children: [{
        path: 'not-found',
        component: ErrorPage_404
    }, {
        path: 'server-error',
        component: ErrorPage_500
    }, {
        path: '*',
        component: ErrorPage_404
    }]
}, {
    path: '/platform',
    component: Home,
    children: [{
        path: 'location',
        component: Location
    }, {
        path: 'dictionary',
        component: Dictionary
    }]
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}]