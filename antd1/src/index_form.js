import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Icon, Input, Button } from 'antd';
let FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        console.log(this.props.form)
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Log in
                    </Button>
                </FormItem>
            </Form>
        )
    }

}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
ReactDOM.render(<WrappedHorizontalLoginForm />, document.getElementById('root'));

