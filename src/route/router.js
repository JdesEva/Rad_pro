/**
 * 路由配置文件
 */

import Loadable from 'react-loadable'

import Loading from '../components/Loading'


const Login = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Login'), loading: Loading })
const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'), loading: Loading })
const Index = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Index'), loading: Loading })
const ErrorPage = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/ErrorPage'), loading: Loading })
const User = Loadable({ loader: () => import(/* webpackChunkName: "User" */ '../views/User'), loading: Loading })
const Register = Loadable({ loader: () => import(/* webpackChunkName: "Register" */ '../views/Register'), loading: Loading })
const Permission = Loadable({ loader: () => import(/* webpackChunkName: "Permission" */ '../views/Permission'), loading: Loading })
const Role = Loadable({ loader: () => import(/* webpackChunkName: "Role" */ '../views/Role/role'), loading: Loading })

export default [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/disabord',
    component: Home,
    children: [{
        path: 'index',
        component: Index
    }, {
        path: '*',
        component: ErrorPage
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
        component: ErrorPage
    }]
},
{
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}]