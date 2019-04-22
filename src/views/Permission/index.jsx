import React from 'react'
import './index.scss'

import { Row, Col, Card, Form, Tree, Empty, Button, Input, Icon } from 'antd'

const { TreeNode } = Tree

@Form.create({})

class Permission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tree: [],
            node: {},
            labelLayout: { //表单布局
                labelCol: {
                    xs: { span: 6 },
                    sm: { span: 6 },
                    md: { span: 4 },
                    xl: { span: 4 }
                },
                wrapperCol: {
                    xs: { span: 18 },
                    sm: { span: 16 },
                    md: { span: 18 },
                    xl: { span: 18 }
                },
            },
            Layout: { //提交按钮布局
                xs: { span: 18 },
                sm: { offset: 6, span: 16 },
                md: { offset: 4, span: 18 },
                xl: { offset: 4, span: 18 }
            }
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this._initTreeList()
        console.log(this)
    }

    componentWillReceiveProps() {
        console.log(this.props)
    }

    /**
     * 查询树形表数据源
     */
    _initTreeList = () => {
        this.props.api.get(this.props.server.permission.query).then(res => {
            console.log(res)
            this.setState({
                tree: res.data.data
            })
        }).catch(() => { })
    }

    /**
     * 选择菜单节点
     */
    onSelect = (key, ev) => {
        console.log(key, ev, ev.node.getNodeState())
        this.setState({
            node: ev.node
        })
        this.props.form.setFieldsValue({
            path: ev.node.props.eventKey,
            name: ev.node.props.title,
            per_path: '暂无',
            root_path: '暂无'
        })
    }

    /**
     * 创建菜单节点
     */
    onCreate = ev => {
        ev.preventDefault()
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                console.log(values)
                this.onSubmit({ ...values, id: this.state.node.props.id })
            }
        })
    }

    /**
     * 提交菜单数据
     */
    onSubmit = params => {
        params = params || {}
        this.props.api.post(this.props.server.permission.create, params).then(res => {
            console.log(res)
            if (res.data.success) {
                this._initTreeList()
                this.setState({
                    node: {}
                })
            }
        }).catch(() => { })
    }


    render() {
        const Loop = data => data.map(row => {
            if (row.children && row.children.length > 0) {
                return <TreeNode id={row.id} key={row.path} title={row.name}>{Loop(row.children)}</TreeNode>
            }
            return <TreeNode id={row.id} key={row.path} title={row.name}></TreeNode>
        })

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={10}>
                        <div className="card-out-wrapper">
                            <Card>
                                <h3>菜单列表</h3>
                                {
                                    this.state.tree.length > 0 ?
                                        <Tree blockNode onSelect={this.onSelect}>
                                            {Loop(this.state.tree)}
                                        </Tree>
                                        : <Empty description="暂无数据">
                                            <Button type="primary" onClick={this.onSubmit.bind(this, {})}>创建</Button>
                                        </Empty>
                                }
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={16} xxl={14}>
                        <div className="card-out-wrapper">
                            <Card>
                                <h3>编辑菜单</h3>
                                <Form style={{ display: Object.keys(this.state.node).length > 0 ? 'block' : 'none' }} {...this.state.labelLayout} onSubmit={this.onCreate}>
                                    <Form.Item label="菜单名称">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }, { pattern: /^[a-zA-Z\u4e00-\u9fa5]+$/, message: '格式不正确' }]
                                        })(
                                            <Input prefix={<Icon type="bars" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="菜单名称" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="菜单路径">
                                        {
                                            getFieldDecorator('path', {
                                                rules: [{ required: true, message: "请输入路径", trigger: 'blur' }, { pattern: /^\/[a-zA-Z/]+$/, message: '格式不正确' }]
                                            })(
                                                <Input prefix={<Icon type="branches" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="路径,以 / 开头" />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="上级目录">
                                        {
                                            getFieldDecorator('per_path')(
                                                <Input disabled prefix={<Icon type="fork" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="顶级目录">
                                        {
                                            getFieldDecorator('root_path')(
                                                <Input disabled prefix={<Icon type="fork" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item wrapperCol={this.state.Layout}>
                                        <Button type="primary" htmlType="submit" block>提交</Button>
                                    </Form.Item>
                                </Form>
                                <Empty style={{ display: Object.keys(this.state.node).length === 0 ? 'block' : 'none' }} description="暂无编辑菜单"></Empty>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Permission