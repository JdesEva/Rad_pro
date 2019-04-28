import React from 'react'
import './index.scss'

import Node from '@/components/Tree_button/node'

import { Row, Col, Card, Form, Tree, Empty, Button, Input, Icon, Skeleton } from 'antd'

const { TreeNode } = Tree

@Form.create({})

class Permission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tree: [],
            List: [],
            Loading: false,
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

    /**
     * 查询树形表数据源
     */
    _initTreeList = () => {
        this.setState({
            Loading: true
        })
        this.props.api.get(this.props.server.permission.query).then(res => {
            console.log(res)
            this.setState({
                tree: res.data.data,
                Loading: false
            })
        }).catch(() => { })
    }

    /**
     * 选择菜单节点
     */
    onSelect = (key, ev) => {
        this.setState({
            node: ev.node.props.node
        })
        this.props.form.setFieldsValue({
            path: ev.node.props.node.path,
            name: ev.node.props.node.name,
            per_path: ev.node.props.node.per_path || null,
            group: ev.node.props.node.group || null,
            icon: ev.node.props.node.icon || null,
            per_order: ev.node.props.node.per_order || null
        })
    }

    /**
     * 创建菜单节点
     */
    onCreate = ev => {
        ev.preventDefault()
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                console.log(values, this.state.node.id.length)
                var data = { ...values, id: this.state.node.id, per_id: this.state.node.per_id }
                if (!this.state.node.per_id) data = { ...data, group: values.path }
                this.onSubmit(data)
            }
        })
    }

    /**
     * 提交菜单数据
     */
    onSubmit = params => {
        this.setState({
            Loading: true
        })
        params = params || {}
        var url = Object.keys(params).length > 0 && params.id ? this.props.server.permission.update : this.props.server.permission.create
        this.props.api.post(url, params).then(res => {
            console.log(res)
            if (res.data.success) {
                this._initTreeList()
                this.setState({
                    node: {},
                    Loading: false
                })
            }
        }).catch(() => { })
    }

    /**
     * 创建一个子节点
     */
    onAdd = node => {
        console.log(node)
        this.onSubmit({
            name: '新建节点',
            per_id: node.id,
            path: '',
            group: node.group,
            per_path: node.path
        })
    }

    /**
     * 删除一个节点
     */
    onRemove = node => {
        console.log(node)
        let params = { id: node.id }
        this.props.api.get(this.props.server.permission.delete, { params: params }).then(res => {
            if (res.data.success) {
                this._initTreeList()
            }
        }).catch(() => { })
    }

    /**
     * 创建一个一级菜单
     */
    onAddFirst = () => {
        this.props.api.get(this.props.server.permission.createFst).then(res => {
            if (res.data.success) {
                this._initTreeList()
            }
        }).catch(() => { })
    }




    render() {
        const Loop = data => data.map(row => {
            if (row.children && row.children.length > 0) {
                return <TreeNode node={row} key={row.id} title={Node(row, this)}>{Loop(row.children)}</TreeNode>
            }
            return <TreeNode node={row} key={row.id} title={Node(row, this)}></TreeNode>
        })
        const { getFieldDecorator } = this.props.form

        const { Loading, tree, node, labelLayout } = this.state

        return (
            <div>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={10}>
                        <div className="card-out-wrapper">
                            <Card>
                                <Skeleton loading={Loading} active paragraph={{ rows: 12 }}>
                                    <h3>菜单列表</h3>
                                    {
                                        tree.length > 0 ? <Button loading={Loading} onClick={this.onAddFirst} className="fir-nav-button">添加一级菜单</Button> : ''
                                    }
                                    {
                                        tree.length > 0 ?
                                            <Tree defaultExpandAll showLine blockNode onSelect={this.onSelect}>
                                                {Loop(tree)}
                                            </Tree>
                                            : <Empty description="暂无数据">
                                                <Button type="primary" onClick={this.onSubmit.bind(this, {})}>创建</Button>
                                            </Empty>
                                    }
                                </Skeleton>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={16} xxl={14}>
                        <div className="card-out-wrapper">
                            <Card>
                                <h3>编辑菜单</h3>
                                <Form style={{ display: Object.keys(node).length > 0 ? 'block' : 'none' }} {...labelLayout} onSubmit={this.onCreate}>
                                    <Form.Item label="菜单名称">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }, { pattern: /^[a-zA-Z\u4e00-\u9fa50-9]+$/, message: '格式不正确' }]
                                        })(
                                            <Input prefix={<Icon type="bars" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="菜单名称" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="菜单路径">
                                        {
                                            getFieldDecorator('path', {
                                                rules: [{ required: true, message: "请输入路径", trigger: 'blur' }, { pattern: /^\/[a-zA-Z/-0-9]+$/, message: '格式不正确' }]
                                            })(
                                                <Input prefix={<Icon type="branches" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="路径,以 / 开头" />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="菜单图标">
                                        {
                                            getFieldDecorator('icon', {
                                                rules: [{ message: "请输入图标", trigger: 'blur' }]
                                            })(
                                                <Input prefix={<Icon type="paper-clip" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="菜单图标" />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="菜单顺序">
                                        {
                                            getFieldDecorator('per_order', {
                                                rules: [{ required: true, message: "请输入菜单顺序" }, { type: 'number', message: '格式不正确', transform: val => { if (val) Number(val) } }]
                                            })(
                                                <Input prefix={<Icon type="exclamation-circle" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="菜单顺序" />
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
                                            getFieldDecorator('group')(
                                                <Input disabled prefix={<Icon type="fork" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item wrapperCol={this.state.Layout}>
                                        <Button type="primary" htmlType="submit" block>提交</Button>
                                    </Form.Item>
                                </Form>
                                <Empty style={{ display: Object.keys(node).length === 0 ? 'block' : 'none' }} description="暂无编辑菜单"></Empty>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Permission