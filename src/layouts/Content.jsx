import React from 'react'
import './Content.scss'

import { Layout } from 'antd'

import { Route, Switch } from 'react-router-dom'

import RouteIntercept from '../components/RouteIntercept' //路由守卫


class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log('content', this)
    }



    render() {
        return (
            <Layout.Content className="content-wrapper" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <Switch>
                    {
                        this.props.children ?
                            this.props.children.map((row, index) => {
                                return (
                                    <Route key={index} path={`${this.props.match.path}/${row.path}`} render={() => {
                                        return (
                                            <RouteIntercept {...this.props} {...row}></RouteIntercept>
                                        )
                                    }}></Route>
                                )
                            })
                            : ""
                    }
                </Switch>
                <div style={{ fontSize: '12px', textAlign: 'center' }}>
                    <p>Rad_pro ©2019 Created by Jdes</p>
                    <p>请勿商用 后果概不负责</p>
                </div>
            </Layout.Content >
        )
    }
}


export default Content