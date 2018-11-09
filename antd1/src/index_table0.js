import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  }, {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  }];

  const data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [{
      key: 21,
      name: 'John Brown',
      age: 42,
      address: 'New York No. 2 Lake Park',
      kk: 99
    }, {
      key: 12,
      name: 'John Brown jr.',
      age: 30,
      address: 'New York No. 3 Lake Park'
    }]
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    children: [{
        key: 111,   
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      }]
  }
];
ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));
















