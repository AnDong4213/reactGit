import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Form, Icon, Input, Button } from 'antd';
let FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        this.props.form.validateFields();
    }
    // validateFields	校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    handleSearch = (e) => {
        e && e.preventDefault();
        // this.props.form.validateFields(['password'], (err, values) => {
        this.props.form.validateFields((err, values) => {
            /*if (!err) {
                console.log('Received values of form: ', values);
            }*/
            console.log(values);
            console.log(err);
        })
    }
    handleReset = (e) => {
        console.log(e)
        this.props.form.resetFields()
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // isFieldTouched  判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger
        // getFieldError	获取某个输入控件的 Error
        // getFieldsError	获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form layout="inline" onSubmit={this.handleSearch}>
                <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入姓名' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'pink' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'blue' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('tel', {
                        rules: [{ required: true, message: '请输入号码', pattern: /^1[3|4|5|7|8]\d{9}$/ }],
                    })(
                        <Input prefix={<Icon type="phone" style={{ color: 'blue' }} />} type="tel" placeholder="Tel" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Log in</Button>
                    <Button onClick={this.handleReset} type="primary">清空</Button>
                </FormItem>
            </Form>
        )
    }
}
// disabled={hasErrors(getFieldsError())}
const WrappedHorizontalLoginForm = Form.create(
  /*{
    onValuesChange: (props, changedValues, allValues) => {
      console.log(allValues);
    }
  }*/
)(HorizontalLoginForm);
ReactDOM.render(<WrappedHorizontalLoginForm />, document.getElementById('root'));
