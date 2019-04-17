/**
 * 路由配置文件
 */

import Loadable from 'react-loadable'

import Loading from '../components/Loading'


const Login = Loadable({ loader: () => import(/* webpackChunkName: "Login" */ '../views/Login'), loading: Loading })
const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../views/Home'), loading: Loading })


export default [{
    path: '/',
    exact: true,
    meta: { auth: true },
    component: Home,
    children: [{}]
}, {
    path: '/login',
    component: Login
}]