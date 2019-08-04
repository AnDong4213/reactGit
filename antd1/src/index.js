import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import './index2.css'

import { Steps } from 'antd'
const Step = Steps.Step;


class App extends React.Component {
    render() {
        return (
          <div style={{margin: 20}}>
          <div className="ant-steps ant-steps-horizontal ant-steps-label-horizontal">

            <div className="ant-steps-item ant-steps-item-finish">
                <div className="ant-steps-item-tail"></div>
                <div className="ant-steps-item-icon">
                    <span className="ant-steps-icon">
                        <span className="ant-steps-icon">1</span>
                    </span>
                </div>
                <div className="ant-steps-item-content">
                    <div className="ant-steps-item-title">aa</div>
                </div>
            </div>

            <div className="ant-steps-item ant-steps-item-process">
                <div className="ant-steps-item-tail"></div>
                <div className="ant-steps-item-icon">
                    <span className="ant-steps-icon">2</span>
                </div>
                <div className="ant-steps-item-content">
                    <div className="ant-steps-item-title">bb</div>
                </div>
            </div>

            <div className="ant-steps-item ant-steps-item-wait">
                <div className="ant-steps-item-tail"></div>
                <div className="ant-steps-item-icon">
                    <span className="ant-steps-icon">3</span></div>
                <div className="ant-steps-item-content">
                    <div className="ant-steps-item-title">cc</div>
                </div>
            </div>

          </div>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
