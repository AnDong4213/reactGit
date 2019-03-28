import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Switch, Modal } from 'antd';
const confirm = Modal.confirm;

/* function onChange(checked) {
    console.log(`switch to ${checked}`);
} */


class App extends React.Component {
    onChange = (id, checked) => {
        console.log(`switch to ${checked}--${id}`);
        console.log('ppp')
    }
    changeClick = () => {
        console.log('changeClick');
        confirm({
            title: '确认框',
            content: '快快快',
            onOk() {
                console.log('onOk')
            },
            onCancel() {
                console.log('onCancel')
            }
        })
    }
    render() {
        return (
            <div style={{margin: 50}}>
                <Switch onChange={(checked) => this.onChange('aa',checked)} />
                <Switch onClick={this.changeClick} checked={true} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
