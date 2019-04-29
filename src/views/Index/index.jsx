import React from 'react'
import './index.scss'

import { Statistic, Row, Col, Card, Icon } from 'antd'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="dashboard-index">
                <Row gutter={20}>
                    <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                        <Card>
                            <Statistic.Countdown title="距离2019年双十一还有" value={new Date('2019-11-11 00:00:00').getTime()} format="D 天 H 时 m 分 s 秒"></Statistic.Countdown>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                        <Card>
                            <Statistic title="Active Users" value={112893} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={6} xxl={6}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Index