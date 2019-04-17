/**
 * 路由配置文件
 */

import Loadable from 'react-loadable'

import Loading from '../components/Loading'


const Login = Loadable({ loader: () => import(/* webpackChunkName: "Login" */ '../views/Login'), loading: Loading })
const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'), loading: Loading })
const User = Loadable({ loader: () => import(/* webpackChunkName: "User" */ '../views/User'), loading: Loading })

export default [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/disabord',
    component: Home,
    children: [{
        path: 'user',
        component: User
    }]
},
{
    path: '/login',
    component: Login
}]