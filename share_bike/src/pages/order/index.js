import React from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message} from 'antd';
import axios from '../../axios';
import Utils from '../../utils/utils';
/* import BaseForm from '../../components/BaseForm';
import ETable from './../../components/ETable'; */
const FormItem = Form.Item;
const Option = Select.Option;

export default class Order extends React.Component {
    state = {
        pagination: {},
        list: [],
        orderInfo: {},
        orderConfirmVisble: false
    }
    params = {
        page: 1
    }

    componentDidMount() {
        this.requestList();
    }
    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            _this.setState({
                list: res.result.item_list.map((item,index) => {
                    item.key = index;
                    return item
                }),
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    _this.requestList()
                })
            })
        })
    }
    handleConfirm = () => {
        /* let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        } */
        axios.ajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    orderId: 'item.id'
                }
            }
        }).then((res)=>{
            if(res.code === '0'){
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisble: true
                })
            }
        })
    }
    handleFinishOrder = () => {
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: 1
                }
            }
        }).then((res) => {
            console.log(res.code)
            message.success('订单结束成功')
            this.setState({
                orderConfirmVisble: false
            })
            this.requestList();
        })
    }

    render() {
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                align: 'center'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                align: 'center'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        const rowSelection = {
            type: 'radio'
        }
        return (
            <div>
                <Card>
                    <FilterFormHaha />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary">订单详情</Button>
                    <Button type="primary" style={{marginLeft: 10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisble:false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

class FilterForm extends React.Component {

    handleSelectChange = (value) => {
        console.log(value)
    }
    
    render() {
        const { getFieldDecorator }  = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="全部" style={{width: 100}} onChange={this.handleSelectChange}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
let FilterFormHaha = Form.create()(FilterForm);






