import React from 'react'
import './Header.scss'

import { Layout, Icon } from 'antd'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this)
    }


    /**
     * 折叠菜单
     */
    toggleIsCollapse = () => {
        this.props.updateMenu({ isCollapse: !this.props.menu.isCollapse })
    }

    render() {
        return (
            <Layout.Header style={{ zIndex: 51, textAlign: 'left' }}>
                <div className="logo" />
                {
                    !this.props.menu.broken ? <Icon onClick={this.toggleIsCollapse} className="trigger-icon" type={this.props.menu.isCollapse ? 'menu-unfold' : 'menu-fold'}></Icon> : ''
                }
            </Layout.Header>
        )
    }
}


export default Header