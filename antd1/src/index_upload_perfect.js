import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'antd/dist/antd.css';

import {Form, Upload, Icon, Spin, Row, Col, Input, Button, Modal, Message} from 'antd';

const FormItem = Form.Item;

class App extends React.Component {

  state = {
    uploading: false,
    previewVisible: false,
    previewImage: '',
    fileList: [],
    fileListReplace: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      let that = this;
      if (!err) {
        this.setState({
          uploading: true
        })
        let param = {
          ...values
        };
        let formData = new FormData();
        let { fileListReplace } = this.state;

        for (let key in param) {
          formData.append(key, param[key])
        }
        fileListReplace.forEach((item, index) => {
          formData.append('logo'+index, item)
        });
        axios.post('http://127.0.0.1:3000/other/form', formData, {
          'Content-Type': 'multiple/form-data'
        }).then(({
					status,
          data
				}) => {
          if (status === 200 && data.desc !== '') {
            console.log(data);
            this.setState({
              uploading: false
            });
            that.setState({
              fileList: [],
              fileListReplace: []
            });
            that.props.form.resetFields();
            Message.info('上传成功')
          } else {
            Message.info('上传失败')
          }
        })

      }
    })
  }
  handleCancel2 = () => {
    this.props.form.resetFields();
  }

  handleCancel = () => this.setState({ previewVisible: false })

  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList, fileListReplace } = this.state;

    const props = {
      // action: 'http://127.0.0.1:3000/other/form',
      multiple: true,
      onRemove: (file) => {
        this.setState(({fileList}) => {
          let index = fileList.indexOf(file);
          let newFileList = fileList.slice();
          newFileList.splice(index, 1);
          let fileListFilter = fileListReplace.filter(item => item.name !== file.name);
          return {
            fileList: newFileList,
            fileListReplace: fileListFilter
          }
        })
      },
      beforeUpload: () => {
        return false
      },
      fileList: this.state.fileList,
      onChange: (file) => {
        fileListReplace.push(file.file);
        this.setState({ 
          fileList: file.fileList
        })
      },
      onPreview: (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
    }

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div style={{margin: 40}}>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Spin spinning={this.state.uploading}>
            <Row>
              <Col>
                <FormItem label="基本信息">
                  {
                    getFieldDecorator('desc', {
                      rules: [
                        {
                          required: true,
                          message: '必输'
                        }
                      ]
                    })(
                      <Input />
                    )
                  }
                </FormItem>
              </Col>
              <Col>
                <FormItem>
                  {
                    getFieldDecorator('age', {
                      rules: [
                        {
                          required: true,
                          message: '必输'
                        }
                      ]
                    })(
                      <Input />
                    )
                  }
                </FormItem>
              </Col>
              <Col>
                <FormItem label="文件上传">
                  <Upload {...props} name="logo" listType="picture-card">
                    {fileList.length >= 10 ? null : uploadButton}
                  </Upload>
                </FormItem>
              </Col>
            </Row>
          </Spin>
          <Row type="flex">
            <FormItem>
              <Button type="primary" htmlType="submit">提交</Button>
              <Button style={{marginLeft: 20}} onClick={this.handleCancel2}>取消</Button>
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