import React from 'react'
import './index.scss'

import { Card, Form, Input, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'
import MD5 from 'js-md5'

@Form.create({})

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this)
    }

    Register = (ev) => {
        ev.preventDefault()
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                this.props.api.post(this.props.server.user.register, { ...values, password: MD5(values.password) }).then(res => {
                    console.log(res)
                    if (res.data.success) {
                        this.props.history.replace('/login')
                    }
                }).catch(() => { })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="register">
                <h3>Rad_Pro</h3>
                <div className="logo">
                    1111
                </div>
                <div className="box">
                    <Card bordered={false} style={{ width: 350 }}>
                        <h2>欢迎注册</h2>
                        <Form onSubmit={this.Register}>
                            <Form.Item hasFeedback>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { pattern: /^[a-zA-Z0-9_-]+$/, message: '用户名格式不正确' }]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item hasFeedback>
                                {
                                    getFieldDecorator('password', {
                                        rules: [{ required: true, message: "请输入密码", trigger: 'blur' }, { min: 6, message: '密码强度过低' }]
                                    })(
                                        <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
                                    )
                                }
                            </Form.Item>
                            <Form.Item>
                                <div className="register--login">
                                    <span>已有账号？</span>
                                    <Link className="login" to="/login">立即登录</Link>
                                </div>
                                <Button block htmlType="submit" type="primary">注册</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}


export default Register