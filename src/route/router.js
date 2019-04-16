/**
 * 路由配置文件
 */

 import Loadable from 'react-loadable'

 import Loading from '../components/Loading'


 const Login = Loadable({ loader: () => import(/* webpackChunkName: "Login" */ '../views/Login'), loading: Loading })


 const routes = [{
     path: '/',
     exact:true,
     component:Login,
     children: []
 }]

 export default routes