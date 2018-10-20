import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Table, Button } from 'antd';

const prdType = [
    {
        prdTypeName: 'aa',
        prdType: 'A'
    },
    {
        prdTypeName: 'bb',
        prdType: 'B'
    },
    {
        prdTypeName: 'cc',
        prdType: 'C'
    },
]
const columns = [{
    title: 'Name1',
    dataIndex: 'name',
    key: 'name',
    filters: prdType ? prdType.map((val, key) => (val && {text: val['prdTypeName'], value: val['prdType']})) : [],
    filterMultiple: false,
    filteredValue: ['C']
  }, {
    title: 'Age2',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address3',
    dataIndex: 'address',
    key: 'address'
  }];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: `${i}`,
        address: `London, Park Lane no. ${i}`,
    })
}

class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false
        }
    } */
    componentDidMount() {
        console.log('生命周期')
    }
    state = {
        selectedRowKeys: [],
        loading: false
    }
    hihi = (aa, bb, cc) => {
        console.log(aa); // {current: '', pageSize: ''}
        console.log(bb);
        for (let k in bb) {
            if (bb[k]) {
                console.log(bb[k][0])
            }
        }
        console.log(cc);
    }
    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
              selectedRowKeys: [],
              loading: false,
            });
        }, 1000);
    }
    onSelectChange = (haha) => {
        console.log('selectedRowKeys changed: ', haha);
        this.setState({ selectedRowKeys: haha });
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{marginBottom: 16}}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table onChange={this.hihi} rowSelection={rowSelection} columns={columns} dataSource={data} />  
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

