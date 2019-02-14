import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Upload, message, Button, Icon} from 'antd';

const props = {
  name: 'file',
  action: 'http://127.0.0.1:3000/other/form',
  multiple: true,
  data: {
    name: 'Tom',
    like: 'Apple'
  },
  headers: {
    authorization: 'authorization-text',
  },
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    };
    if (file.status === 'done') {
      message.success(`${file.name} file uploaded successfully`);
    } else if (file.status === 'error') {
      message.error(`${file.name} file upload failed.`);
    }
  },
  defaultFileList: [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
  onRemove(info) {
    console.log(info)
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={{margin: 40}}>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));
