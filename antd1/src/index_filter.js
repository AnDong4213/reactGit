import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table } from 'antd';

class App extends React.Component {
    onChange = (pagination, filters, sorter) => {
        console.log(pagination);
        console.log(filters);
        console.log(sorter);
    }
    componentDidMount() {
        // console.log(this.refs.hehe.textContent)
        console.log(this.refs.hehe)
        console.log(this.hihi)
    }
    
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                filters: [{
                    text: 'Joe1',
                    value: 'Joe',
                },{
                    text: 'Jim1',
                    value: 'Jim',
                },{
                    text: 'zhao1',
                    value: 'zhao',
                }],
                onFilter: (value, record) => record.name.indexOf(value) === 0,
                filterMultiple: true
            },
            {
                title: 'Age',
                dataIndex: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address'
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
                <h2 ref="hehe">我是标题2</h2>
                <h3 ref={(haha) => {this.hihi = haha}}>我是标题3</h3>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

