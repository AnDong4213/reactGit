import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
import './index.css';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const DATE_FORMAT_WITH_TIME = 'YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT_WITH_TIME2 = ['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 59:59:59'];

function onChange(value, dateString) {
  console.log('Selected Time: ', value.format(DATE_FORMAT_WITH_TIME2[0]));
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

export default class App extends React.Component {

  state =  {
    isopen: false,
    time: null,
    mode: 'year'
  }

  render() {
    return (
      <div style={{margin: 40}}>
        <DatePicker
          showTime
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          placeholder={['Start Time', 'End Time']}
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <MonthPicker
          onChange={onChange}
        />
        <br />
        <DatePicker
          format="YYYY"
          mode={this.state.mode}
          value={this.state.time}
          open={this.state.isopen}
          onFocus={() => {this.setState({isopen: true})}}
          onBlur={() => {this.setState({isopen: false})}}
          onPanelChange={(v) => {
              console.log(v)
              this.setState({
                time: v,
                isopen: false
              })
          }}
        />
      </div>
    )
  }
}

// ReactDOM.render(<App />,  document.getElementById('root'));
// defaultValue={[moment('2015/01/01', DATE_FORMAT_WITH_TIME), moment('2015/01/01', DATE_FORMAT_WITH_TIME)]}
