import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';

import { Form, Input, Icon, Button, Col } from 'antd';
const { TextArea } = Input;
let id = 0;

class Haha extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // console.log(this.refs.getButton);
      this.refs.getButton.haha();
	    this.child.hehe();  // 子组件...
	  
      if (!err) {
        let { dictKey, dictValue, dictDesc} = values;
        let data = [];
        dictKey.forEach((item, index) => {
          let o = {};
          o.dictKey = item;
          o.dictValue = dictValue[index];
          o.dictDesc = dictDesc[index];
          data.push(o)
        })
        // console.log(data);
      }
	  
    });
  }
  
  onRef = (ref) => {
	  this.child = ref;
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 17
      },
    };

    getFieldDecorator('keys', { initialValue: [0] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <div key={k}>
        <Col>
          <Form.Item label="字典key" {...formItemLayout}>
            {getFieldDecorator(`dictKey[${k}]`)(
                <Input />
            )}
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="字典value" {...formItemLayout}>
            {getFieldDecorator(`dictValue[${k}]`)(
              <Input />
            )}
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="字典描述口径" {...formItemLayout}>
            {getFieldDecorator(`dictDesc[${k}]`)(
              <TextArea rows={3} style={{resize: 'none'}} />
            )}
          </Form.Item>
        </Col>
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </div>
    ));
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {formItems}
          <Form.Item>
            <Button type="dashed" onClick={this.add}><Icon type="plus" /> Add field</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
        <He ref="getButton" />
		    <Hello onRef={this.onRef} />
      </div>
    );
  }
}

class He extends React.Component {
  haha = () => {
    console.log('哈哈...');
  }
  render() {
    return (
      <div>
        我是子组件11...
        <Button onClick={this.haha}>点击11</Button>
      </div>
    )
  }
}

class Hello extends React.Component {
  componentDidMount() {
	  this.props.onRef(this)
  }
  hehe = () => {
    console.log('呵呵...');
  }
  render() {
    return (
      <div>
        我是子组件22...
        <Button onClick={this.hehe}>点击22</Button>
      </div>
    )
  }
}

Haha = Form.create({ name: 'dynamic_form_item' })(Haha);
ReactDOM.render(<Haha />,  document.getElementById('root'));
