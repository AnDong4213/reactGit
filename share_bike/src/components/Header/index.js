import React from 'react';
import { Row, Col } from 'antd';
import Util from './../../utils/utils';
// import axios from './../../axios';
import axios2 from 'axios';
import { connect } from 'react-redux'

import './index.less';

class Header extends React.Component {
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
        this.getWeatherAPIData();
    }
    componentDidMount() {
      // console.log(this.props);
    }
    getWeatherAPIData() {
        let city = '110101';
        /* axios.jsonp({
            url: `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=879624f4c9aee6c1f7cdd36b0f3e7241&extensions=all`
        }).then(res => {
            let data = res[0];
            this.setState({
                dayPictureUrl: data.province + '-' + data.city,
                weather: data.casts[0].dayweather,
                daywind: data.casts[0].daywind
            })
        }) */
        axios2.get(`/api/weather.json?city=${city}&key=879624f4c9aee6c1f7cdd36b0f3e7241&extensions=all`)
        .then(res => {
            let data = res.data.forecasts[0];
            this.setState({
                dayPictureUrl: data.province + '-' + data.city,
                weather: data.casts[0].dayweather,
                daywind: data.casts[0].daywind
            })
        })
    }
    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ?
                        <Col span="6" className="logo">
                            <img src="/assets/logo-ant.svg" alt="" />
                            <span>Imooc 通用管理系统</span>
                        </Col> : null
                    }
                    <Col span={menuType ? 18 : 24}>
                        <span>Hello, {this.state.userName}</span>
                        <a style={{color: '#ff00c2'}} href="">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? null :
                    <Row className="breadcrumb">
                        <Col className="breadcrumb-title" span="4">{this.props.menuName}</Col>
                        <Col className="weather" span="20">
                            <span className="date">{this.state.sysTime}</span>
                            <span className="weather-img">
                                <img src="/assets/duoyun.png" alt="" />
                            </span>
                            <span className="weather-detail">
                                {this.state.dayPictureUrl} / {this.state.weather}({this.state.daywind}风)
                            </span>
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuName: state.menuName
    }
}

export default connect(mapStateToProps)(Header);
