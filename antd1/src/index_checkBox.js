import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange', 'Peach'];
const defaultCheckedList = ['Apple', 'Orange'];

class App extends React.Component {

  state = {
    defaultCheckedList
  };

  render() {
    return (
      <div style={{padding: '40px'}}>
        <CheckboxGroup options={plainOptions} value={this.state.defaultCheckedList} onChange={this.onChange} />
      </div>
    );
  }

  onChange = (defaultCheckedList) => {
    // console.log(defaultCheckedList)
    this.setState({
      defaultCheckedList
    });
  }

}

/* class App extends React.Component {

  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  render() {
    return (
      <div style={{padding: '40px'}}>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

} */

ReactDOM.render(<App />, document.getElementById('root'));
















