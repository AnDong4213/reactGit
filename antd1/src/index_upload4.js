import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Upload, message, Icon} from 'antd';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.addEventListener('load', () => callback(reader.result));
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/png';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
  // return false;
}

class App extends React.Component {

  state = {
    loading: false
  };

  handleChange = ({ file, fileList }) => {
    if (file.status === 'uploading') {
      this.setState({
        loading: true
      });
      return;
    };
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    };
    if (file.status === 'done') {
      getBase64(file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    } else if (file.status === 'error') {
      message.error(`${file.name} file upload failed.`);
    }
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <div style={{margin: 40}}>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="http://127.0.0.1:3000/other/form"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img style={{width: 200, height: 200}} src={imageUrl} alt="avatar" /> : uploadButton}
        </Upload>
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));
