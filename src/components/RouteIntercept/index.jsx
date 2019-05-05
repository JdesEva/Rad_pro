/**
 * 路由守卫
 */


import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import mapDispatchToProps from './dispatch'

const mapStateToProps = state => {
    return { ...state }
}

@connect(mapStateToProps, mapDispatchToProps)

@withRouter


class RouterIntercept extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        console.log(this)
        this.Auth()
    }

    componentWillUnmount() {
        this.setState = () => {
            return
        }
    }

    Auth = () => {
        let { history: { replace }, location, token } = this.props

        //不存在token则打回登录页
        if (!token && this.props.path !== '/register') replace('/login')

        //跳转至首页
        if (location.pathname === '/' || location.pathname === '/dashboard') replace('/dashboard/index')

        //回到登录页清空信息
        if (this.props.path === '/login') this.props.resetHttp({})
    }

    render() {
        const Component = this.props.component
        return (
            <Component {...this.props}></Component>
        )
    }
}


export default RouterIntercept