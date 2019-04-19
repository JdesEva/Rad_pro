import React from 'react'
import './Aside.scss'

import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

class Aside extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this)
    }


    /**
     * 开启收缩菜单
     */
    onBroken = broken => {
        this.props.updateMenu({ broken: broken })
    }


    /**
     * 折叠菜单
     */
    toggleIsCollapse = (isCollapse) => {
        console.log(isCollapse)
        this.props.updateMenu({ isCollapse: isCollapse })
    }

    render() {
        return (
            <Layout.Sider breakpoint="md" className="custom-aside" collapsedWidth={this.props.menu.broken ? '0' : '80'}
                collapsed={this.props.menu.isCollapse}
                onBreakpoint={broken => { this.onBroken(broken) }}
                onCollapse={isCollapse => { this.toggleIsCollapse(isCollapse) }}>
                <Menu defaultSelectedKeys={['1']} mode="inline" style={{ borderRight: !this.props.menu.isCollapse ? 'none' : '1px solid #e8e8e8' }}>
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>系统主页</span>
                        <Link to={`${this.props.match.path}/index`}></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="user" />
                        <span>用户管理</span>
                        <Link to={`${this.props.match.path}/user`}></Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="ordered-list" />
                        <span>菜单管理</span>
                        <Link to={`${this.props.match.path}/permission`}></Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="33">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout.Sider >
        )
    }
}


export default Aside