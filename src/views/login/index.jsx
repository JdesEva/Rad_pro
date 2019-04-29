import React from 'react'
import './index.scss'

import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import MD5 from 'js-md5'

@Form.create({})

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this, 'api', this.props.api.defaults)
    }

    Login = ev => {
        ev.preventDefault()
        this.props.form.validateFields((errors, values) => {
            if (!errors) {
                this.props.api.post(this.props.server.user.login, { ...values, password: MD5(values.password) }).then(res => {
                    console.log(res)
                    if (res.data.success) {
                        this.props.updateToken(res.data.data)
                        this.props.updateLogin(new Date().getTime())
                        this.props.history.replace('/')
                    }
                }).catch(() => { })
            }
        })

    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login-warpper">
                <Card className="login-box" style={{ width: 350 }}>
                    <h2>Rad_Pro</h2>
                    <Form onSubmit={this.Login} className="login-form">
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
                                    rules: [{ required: true, message: "请输入密码", trigger: 'blur' }]
                                })(
                                    <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox className="remember">记住我</Checkbox>
                                )
                            }
                            <Link to="/#" className="forget">忘记密码</Link>
                            <Button block htmlType="submit" type="primary">登录</Button>
                            <div className="remember">
                                或 <Link to="/register">立即注册</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login