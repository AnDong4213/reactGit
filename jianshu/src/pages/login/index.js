import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreateors } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
    render() {
        // const { title, content } = this.props;
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' innerRef={(input) => {this.account = input}} />
                    <Input placeholder='密码' type="password" innerRef={(input) => {this.password = input}} />
                    <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
    componentDidMount() {
        // this.props.getDetail(this.props.match.params.id);
    }
}

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        // console.log(accountElem.value, passwordElem.value)
        dispatch(actionCreateors.login(accountElem.value, passwordElem.value))
    }
})

export default connect(null, mapDispatch)(Login);





