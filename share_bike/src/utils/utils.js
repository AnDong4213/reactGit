import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

function addZero(m){
    return m < 10 ? '0' + m : m;
}
export default {
    formateDate(t) {
        let time = new Date(t);
        let y = time.getFullYear(), m = time.getMonth()+1, d = time.getDate();
        let h = time.getHours(), mm = time.getMinutes(), s = time.getSeconds();
        return y+'-'+addZero(m)+'-'+addZero(d)+' '+addZero(h)+' : '+addZero(mm)+' : '+addZero(s);
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper:true
        }
    },
	
    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.forEach((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        // return options;
    },
	
    updateSelectedItem(selectedRowKeys, selectedItem, selectedIds){
        if (selectedIds){
            this.setState({
                selectedRowKeys,
                selectedItem,
                selectedIds
            })
        }else{
            this.setState({
                selectedRowKeys,
                selectedItem
            })
        }
    }

}