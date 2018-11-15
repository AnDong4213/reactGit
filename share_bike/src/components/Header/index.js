import React from 'react';
import { Row, Col } from 'antd';
import Util from './../../utils/utils';

import './index.less';

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: '赵安东'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>Hello, {this.state.userName}</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col className="breadcrumb-title" span="4">首页</Col>
                    <Col className="weather" span="20">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">最美的不是下雨天</span>
                    </Col>
                </Row>
            </div>
        )
    }
}