import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Modal, Button } from 'antd';

class App extends React.Component {
    state = { visible: true };

    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleOk = (e) => {
        console.log('ooo');
        this.setState({
          visible: false,
        });
    }
    handleCancel = (e) => {
        console.log('e');
        this.setState({
          visible: false,
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Open Modal</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    >
                    <p style={{textAlign: 'center',color: '#f0f'}}>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
















