import React from 'react'
import './index.scss'

import { Table, Card } from 'antd'

const { Column } = Table


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            Loading: false
        }
    }

    componentDidMount() {
        this.__initTableList()
    }

    componentWillUnmount() {
        this.setState = () => {
            return
        }
    }

    /**
     * 查询表格数据
     */
    __initTableList = () => {
        this.setState({
            Loading: true
        })
        this.props.api.get(this.props.server.user.query).then(res => {
            console.log(res)
            if (res.data.success) {
                this.setState({
                    data: res.data.data,
                    Loading: false
                })
            }
        })
    }


    render() {
        const { Loading, data } = this.state
        return (
            <div>
                <Card>
                    <Table loading={{ spinning: Loading, delay: 500 }} rowKey="id" dataSource={data}>
                        <Column dataIndex="username" key="username" title="用户名"></Column>
                        <Column dataIndex="login_ip" key="login_ip" title="登陆地IP"></Column>
                        <Column dataIndex="telphone" key="telphone" title="手机号码"></Column>
                        <Column dataIndex="create_time" key="create_time" title="创建时间"></Column>
                    </Table>
                </Card>
            </div>
        )
    }
}


export default User