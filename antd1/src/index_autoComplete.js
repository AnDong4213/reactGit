import React from 'react';
import ReactDOM from 'react-dom';

import {
  AutoComplete,
  Input,
  Icon
} from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

function debounce(func, wait) {
  let timer

  return function (...para) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, para)
    }, wait)
  }
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {

    this.setState({
      dataSource: [
        'value',
        'value + value',
        'value + value + value', ,
      ],
    });
  }

  render() {
    const {
      dataSource
    } = this.state;
    return ( <
      AutoComplete dataSource = {
        dataSource
      }
      style = {
        {
          width: 200
        }
      }
      onSelect = {
        onSelect
      }
      onSearch = {
        this.handleSearch
      }
      placeholder = "input here" >
      <
      Input suffix = {
        <
        Icon type = "search" / >
      }
      /> < /
      AutoComplete >
    );
  }
}

/* import { Icon, Input, AutoComplete } from 'antd';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: 'AntDesign UI 有多好',
    count: 60100,
  }, {
    title: 'AntDesign 是啥',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'AntDesign 是一个设计语言',
    count: 100000,
  }],
}];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count} 人 关注</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </Option>,
]);

function Complete() {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" />} />
      </AutoComplete>
    </div>
  );
} */

// ReactDOM.render(<Complete />, document.getElementById('root'));
export default Complete;