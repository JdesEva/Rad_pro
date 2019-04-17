import React from 'react'
import './index.scss'

import { Layout } from 'antd'

import Header from '../../layouts/Header'
import Aside from '../../layouts/Aside'
import Content from '../../layouts/Content'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        console.log('home', this)
    }


    render() {
        return (
            <div className="home">
                <Layout>
                    <Header></Header>
                    <Layout>
                        <Aside></Aside>
                        <Layout>
                            <Content {...this.props}></Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


export default Home