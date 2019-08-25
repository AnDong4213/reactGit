import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'antd/dist/antd.css';

import {Form, Upload, Icon, Spin, Row, Col, Input, Button} from 'antd';

const FormItem = Form.Item;

class App extends React.Component {

  state = {
    loading: false,
    uploading: false,
    fileList: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let that = this;
      if (!err) {
        let param = {
          ...values
        };
        let formData = new FormData();
        let { fileList } = this.state;

        for (let key in param) {
          formData.append(key, param[key])
        }
        fileList.forEach((item, index) => {
          if (item.size/1024 > 70) {
            console.log(index);
          } else {
            formData.append('logo'+index, item)
          }
        });
        axios.post('http://127.0.0.1:3000/other/form', formData, {
          'Content-Type': 'multiple/form-data'
        }).then(res => {
          that.setState({
            fileList: []
          });
          that.props.form.resetFields();
          console.log(res.data)
        })

      }
    })
  }
  handleCancel = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const props = {
      // action: 'http://127.0.0.1:3000/other/form',
      multiple: true,
      onRemove:(file) => {
        this.setState(({fileList}) => {
          let index = fileList.indexOf(file);
          // let newFileList = JSON.parse(JSON.stringify(fileList));  // 这样写不行的...
          let newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          }
        })
      },
      beforeUpload: (file) => {
        this.setState(({fileList}) => ({
          fileList: [...fileList, file]
        }))
        return false
      },
      fileList: this.state.fileList
    }

    return (
      <div style={{margin: 40}}>
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Spin spinning={this.state.uploading}>
            <Row>
              <Col>
                <FormItem label="基本信息">
                  {
                    getFieldDecorator('desc', {})(
                      <Input />
                    )
                  }
                </FormItem>
              </Col>
              <Col>
                <FormItem>
                  {
                    getFieldDecorator('age', {})(
                      <Input />
                    )
                  }
                </FormItem>
              </Col>
              <Col>
                <FormItem label="文件上传">
                  <Upload {...props} name="logo" listType="text">
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                </FormItem>
              </Col>
            </Row>
          </Spin>
          <Row type="flex">
            <FormItem>
              <Button type="primary" htmlType="submit">提交</Button>
              <Button style={{marginLeft: 20}} onClick={this.handleCancel}>取消</Button>
            </FormItem>
          </Row>
        </Form>
      </div>
    )
  }
}

App = Form.create({})(App);

export default App;

// ReactDOM.render(<App />,  document.getElementById('root'));