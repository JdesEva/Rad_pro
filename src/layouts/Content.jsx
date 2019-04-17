import React from 'react'

import { Layout } from 'antd'

import { Route, Switch } from 'react-router-dom'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log('contenty', this)
    }

    render() {
        return (
            <Layout.Content>
                Content
            </Layout.Content>
        )
    }
}


export default Content