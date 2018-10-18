import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Name1',
        dataIndex: 'aa',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>
    },
    {
        title: 'Age2',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address3',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags4',
        dataIndex: 'tags',
        key: 'tags',
        render: tags => (
            <em>
                {tags.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)}
            </em>
        )
    },
    {
        title: 'Action5',
        key: 'action',
        render: (text, record) => (
            <span>
              <a href="javascript:;">Invite {record.aa}</a>
              <Divider type="vertical" />
              <a href="javascript:;">{text.age}</a>
            </span>
        )
    }
]

const data = [
    {
        key: '1',
        aa: 'John Brown',
        age: 32,
        address: 'New York',
        tags: ['developer']
    },
    {
        key: '2',
        aa: 'Jim Green',
        age: 42,
        address: 'London',
        tags: ['loser']
    },
    {
        key: '3',
        aa: 'Joe Black',
        age: 32,
        address: 'Sidney',
        tags: ['teacher']
    }
]

/* class HorizontalLoginForm extends React.Component {
    render() {
        return (
            <div>oo</div>
        )
    }

} */

ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));

