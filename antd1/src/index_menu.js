import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker, Menu, Ico } from 'antd';
 
// import 'antd/dist/antd.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}
ReactDOM.render(
  <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
    <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>

    <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>

    <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
      <Menu.Item key="13">Option 13</Menu.Item>
    </SubMenu>
		<Menu.Item key="14">Option 14</Menu.Item>
		<Menu.Item key="15">Option 15</Menu.Item>
  </Menu>, document.getElementById('root'));


// ReactDOM.render(<DatePicker />, document.getElementById('root'));
















