import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table } from 'antd';

class App extends React.Component {

    onChange = (pagination, filters, sorter) => {
       /*  console.log(pagination);
        console.log(filters);
        console.log(sorter); */
    }
    
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                filters: [{
                    text: 'Joe',
                    value: 'Joe',
                },{
                    text: 'Jim',
                    value: 'Jim',
                },{
                    text: 'zhao',
                    value: 'zhao',
                }],
                // onFilter: (value, record) => record.name.indexOf(value) === 0,
                onFilter: (value, record) => {
                    // console.log(value);
                    // console.log(record);
                    return record.name.indexOf(value) === 0
                },
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                defaultSortOrder: 'ascend',
                sorter: (a, b) => a.age - b.age
            },
            {
                title: 'Address',
                dataIndex: 'address',
                filters: [{
                    text: 'London',
                    value: 'London',
                }, {
                    text: 'New York',
                    value: 'New York',
                }],
                filterMultiple: false,
                onFilter: (value, record) => record.address.indexOf(value) === 0,
                sorter: (a, b) => a.address.length - b.address.length
            }
        ]
        const data = [{
            key: '1',
            name: 'John B',
            age: 12,
            address: 'New York No. 1 Lake Park'
          }, {
            key: '2',
            name: 'Jim Gr',
            age: 42,
            address: 'London No. 1 Lake Park'
          }, {
            key: '3',
            name: 'Joe Bla',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
          }, {
            key: '4',
            name: 'Jim Red',
            age: 22,
            address: 'London No. 2 Lake Park'
        },{
            key: '5',
            name: 'Jim Pink',
            age: 25,
            address: 'London No. 3 Lake Park'
        },{
            key: '6',
            name: 'zhao Blackll',
            age: 23,
            address: 'London No. 3 Lake Park'
        }];
        return (
            <div style={{margin: 50}}>
                <Table columns={columns} dataSource={data} onChange={this.onChange} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

