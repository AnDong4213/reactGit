import React from 'react';
import 'antd/dist/antd.css';

import { Upload, Icon } from 'antd';

class PicturesWall extends React.Component {
  state = {
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }
    ]
  };

  handleChange = ({ file, fileList }) => {
    // this.setState({ fileList: [...fileList] });
    this.setState({ fileList: [file] });
  }

  render() {
    const { fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
      </div>
    );
  }
}
export default PicturesWall;
