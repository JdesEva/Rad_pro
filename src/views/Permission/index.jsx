import React from 'react'
import './index.scss'

import { Row, Col, Card, Icon, Form } from 'antd'


@Form.create({})

class Permission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this._initTreeList()
        console.log(this)
    }

    componentWillReceiveProps() {
        console.log(this.props)
    }

    _initTreeList = () => {
        this.props.api.get('/permission/selectByCondition').then(res => {
            console.log(res)
        }).catch(() => { })
    }

    render() {
        //const { TreeNode } = Tree
        return (
            <div>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={10}>
                        <Card>
                            <h3>菜单列表</h3>
                            <Icon type="lock"></Icon>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={16} xxl={14}>
                        <Card>
                            <h3>111</h3>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Permission