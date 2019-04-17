/**
 * 路由守卫
 */


import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch } from 'react-router-dom'

import mapDispatchToProps from './dispatch'

class RouterIntercept extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        let { history: { replace }, token } = this.props
        if (!token) replace('/login') //不存在token则打回登录页
    }

    render() {
        const Component = this.props.component
        return (
            <Switch>
                <Component {...this.props}></Component>
            </Switch>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { ...state }
}



RouterIntercept = withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterIntercept))

export default RouterIntercept