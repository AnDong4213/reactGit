import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

const Option = Select.Option;

let timeout, currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result, data = [];
          result.forEach(r => {
            data.push({
              value: r[1],
              text: r[0],
            })
          })
          callback(data);
        }
      })
  }
  timeout = setTimeout(fake, 300);
}

export default class App extends React.Component {
  state = {
    data: [],
    value: '你看',
  }

  handleSearch = value => {
    console.log(value)
    fetch(value, data => this.setState({data}))
  }
  handleChange = value => {
    console.log(value)
    this.setState({ value });
  }

  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <div style={{margin: 30}}>
        <Select
          showSearch
          value={this.state.value}
          placeholder={this.props.placeholder}
          style={this.props.style}
          defaultActiveFirstOption={true}
          showArrow={true}
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
        >
          {options}
        </Select>
      </div>
    )
  }
}

// ReactDOM.render(<App placeholder="input search text" style={{ width: 200 }} />,  document.getElementById('root'));



// code=utf-8&q=value
// {ok: true, json: ƒ}

/* function fake() {
  const str = querystring.encode({
    code: 'utf-8',
    q: '汽车',
  });
  jsonp(`https://suggest.taobao.com/sug?${str}`)
    .then(response => response.json())
    .then(d => {
      const result = d.result, data = [];
      console.log(result)
      result.forEach(r => {
        data.push({
          value: r[0],
          text: r[1],
        })
      })
      console.log(data)
    })
}
fake() */
