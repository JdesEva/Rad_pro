/**
 * 路由守卫
 */


import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import mapDispatchToProps from './dispatch'

class RouterIntercept extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        console.log(this)
        let { history: { replace }, location, token } = this.props
        if (!token && this.props.path !== '/register') replace('/login') //不存在token则打回登录页
        if (location.pathname === '/') replace('/disabord/index') //跳转至首页
    }

    render() {
        const Component = this.props.component
        return (
            <Component {...this.props}></Component>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { ...state }
}



RouterIntercept = withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterIntercept))

export default RouterIntercept