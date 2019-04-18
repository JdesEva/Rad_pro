import React from 'react'

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
            <Layout.Content>
                <Switch>
                    {
                        this.props.children.map((row, index) => {
                            return (
                                <Route key={index} path={`${this.props.match.path}/${row.path}`} render={() => {
                                    return (
                                        <RouteIntercept {...this.props} {...row}></RouteIntercept>
                                    )
                                }}></Route>
                            )
                        })
                    }
                </Switch>
            </Layout.Content>
        )
    }
}


export default Content