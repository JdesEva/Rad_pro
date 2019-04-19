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
                    <Header {...this.props}></Header>
                    <Layout>
                        <Aside {...this.props}></Aside>
                        <Layout>
                            <Content {...this.props}></Content>
                            <p style={{ marginBottom: 0, textAlign: 'center' }}>Rad_pro ©2019 Created by Jdes 请勿商用 后果概不负责</p>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


export default Home