import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreateors } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}} />
                        <Input placeholder='密码' type="password" innerRef={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
        
    }
    componentDidMount() {
        // this.props.getDetail(this.props.match.params.id);
    }
}

// 方法和状态的名字不能一样
const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        // immutable的话要用innerRef而不是ref
        dispatch(actionCreateors.login(accountElem.value, passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login);





