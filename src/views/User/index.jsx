import React from 'react'

import { Table, Card } from 'antd'

const { Column } = Table


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.__initTableList()
    }

    /**
     * 查询表格数据
     */
    __initTableList = () => {
        this.props.api.get(this.props.server.user.query).then(res => {
            console.log(res)
            if (res.data.success) {
                this.setState({
                    data: res.data.data
                })
            }
        })
    }


    render() {
        return (
            <div>
                <Card>
                    <Table rowKey="id" dataSource={this.state.data}>
                        <Column dataIndex="username" key="username" title="用户名"></Column>
                        <Column dataIndex="login_ip" key="login_ip" title="登陆地IP"></Column>
                        <Column dataIndex="tel" key="tel" title="手机号码"></Column>
                        <Column dataIndex="create_time" key="create_time" title="创建时间"></Column>
                    </Table>
                </Card>
            </div>
        )
    }
}


export default User