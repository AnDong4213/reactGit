import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [{
    key: '1',
    fName: 'John',
    lName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    fName: 'Jim',
    lName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    fName: 'Joe',
    lName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

ReactDOM.render(
    <Table dataSource={data}>
        <ColumnGroup title='Name'>
            <Column
                title='First Name'
                dataIndex='fName'
                key='fName'
            />
            <Column
                title='Last Name'
                dataIndex='lName'
                key='lName'
            />
        </ColumnGroup>
        <Column
            title="Age"
            dataIndex="age"
            key="age"
        />
        <Column
            title="Address"
            dataIndex="address"
            key="address"
        />
        <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
                <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
            )}
        />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <span>
                <a href="javascript:;">Invite {record.lastName}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
                </span>
            )}
        />
    </Table>, document.getElementById('root'));

