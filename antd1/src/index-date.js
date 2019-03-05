import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const DATE_FORMAT_WITH_TIME = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT_WITH_TIME2 = ['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 59:59:59'];

function onChange(date, dateString) {
  console.log(date, dateString);
  console.log(date.format(DATE_FORMAT_WITH_TIME2[0]))
  if (date.length > 0 && dateString[0] !== '') {
    console.log(date, dateString);
    console.log(date.length, dateString.length);
    console.log(date[0].format(DATE_FORMAT_WITH_TIME2[0]))
    console.log(date[1].format(DATE_FORMAT_WITH_TIME2[1]))
  }
}

class App extends React.Component {

  render() {
    return (
      <div style={{margin: 40}}>
        <DatePicker onChange={onChange} defaultValue={moment('2019/03/03', DATE_FORMAT_WITH_TIME)} format={DATE_FORMAT_WITH_TIME} />
        <br />
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <WeekPicker placeholder="Select week" />
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));
// defaultValue={[moment('2015/01/01', DATE_FORMAT_WITH_TIME), moment('2015/01/01', DATE_FORMAT_WITH_TIME)]}  