import React from 'react'
import './index.scss'

import { Layout, Drawer, Spin } from 'antd'
import { Redirect } from 'react-router-dom'

import * as __ from '../../utils/tool'

import Header from '@/layouts/Header'
import Aside from '@/layouts/Aside'
import Content from '@/layouts/Content'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            data: [],
            Loading: false,
        }
    }

    componentDidMount() {
        console.log('home', this)
        __.__Once(this.__initNavmenu())
    }


    componentWillUnmount() {
        this.setState = () => {
            return
        }
    }

    /**
     * 查询菜单,先判断缓存或者是否在有效时间之内，如果在则不去请求，否则进行请求
     */
    __initNavmenu = () => {
        if (!this.props.menu.data || (this.props.menu.data.length && this.props.menu.data.length === 0) || new Date().getTime() - this.props.login > 12 * 60 * 1000) {
            this.setState({
                Loading: true
            })
            this.props.api.get(this.props.server.permission.query).then(res => {
                console.log(res)
                if (res.data.success) {
                    this.props.updateMenu({ data: res.data.data })
                    this.props.updateLogin(new Date().getTime()) //更新登录时间
                    this.setState({
                        Loading: false
                    })
                }
            })
        }
    }


    render() {
        return (
            <div className="home">
                <Spin spinning={this.state.Loading} delay={500} size="large" tip="Loading...">
                    <Drawer
                        title="全局设置"
                        placement="right"
                        width={300}
                        onClose={() => { this.props.onCloseDrawer({ visible: false }) }}
                        visible={this.props.drawer.visible}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                    {
                        Object.keys(this.props.http).length > 0 && this.props.http.status !== 200 ? <Redirect to="/login"></Redirect> : '' //axios 拦截错误之后，打回登录页
                    }
                    <Layout>
                        <Header {...this.props}></Header>
                        <Layout>
                            <Aside {...this.props} data={this.props.menu.data}></Aside>
                            <Layout>
                                <Content {...this.props}></Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Spin>
            </div >
        )
    }
}


export default Home