import React from 'react'
import './index.scss'

import { Layout } from 'antd'
import { Redirect } from 'react-router-dom'

import Header from '@/layouts/Header'
import Aside from '@/layouts/Aside'
import Content from '@/layouts/Content'


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
                {
                    Object.keys(this.props.http).length > 0 && this.props.http.status !== 200 ? <Redirect to="/login"></Redirect> : '' //axios 拦截错误之后，打回登录页
                }
                <Layout>
                    <Header {...this.props}></Header>
                    <Layout>
                        <Aside {...this.props}></Aside>
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