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

    /**
     * 开启收缩菜单
     */
    onBroken = broken => {
        this.props.updateMenu({ broken: broken })
    }

    /**
     * 折叠菜单
     */
    toggleIsCollapse = isCollapse => {
        console.log(isCollapse, this.props.menu.isCollapse)
        this.props.updateMenu({ isCollapse: isCollapse })
    }

    /**
     * 选中菜单
     */
    onSelect = node => {
        console.log(node)
        this.props.updateMenu({ isActive: node.keyPath })
    }

    /**
     * 展开菜单,保证每次只有一个菜单处于展开状态
     */
    onOpenChange = key => {
        this.props.updateMenu({ isOpen: key.splice(-1) })
    }

    render() {
        const mapPermission = data => data.map(row => {
            if (row.children) {
                return (
                    <SubMenu
                        key={row.id}
                        title={<span>{row.icon ? <Icon type={row.icon} /> : ''}<span>{row.name}</span></span>}
                    >
                        {mapPermission(row.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={row.id}>
                    {row.icon ? <Icon type={row.icon} /> : ''}
                    <span>{row.name}</span>
                    <Link to={`${row.group}${row.path}`}></Link>
                </Menu.Item>
            )
        })
        return (
            <Layout.Sider breakpoint="md" className="custom-aside" collapsedWidth={this.props.menu.broken ? '0' : '80'}
                collapsed={this.props.menu.isCollapse}
                onBreakpoint={broken => { this.onBroken(broken) }}
                onCollapse={isCollapse => { this.toggleIsCollapse(isCollapse) }}>
                <Menu openKeys={this.props.menu.isOpen} onOpenChange={this.onOpenChange} defaultOpenKeys={this.props.menu.isOpen} onSelect={this.onSelect} selectedKeys={this.props.menu.isActive} mode="inline" style={{ borderRight: !this.props.menu.isCollapse ? 'none' : '1px solid #e8e8e8' }}>
                    {
                        this.props.menu.data ? mapPermission(this.props.data) : ''
                    }
                </Menu>
            </Layout.Sider>
        )
    }
}


export default Aside