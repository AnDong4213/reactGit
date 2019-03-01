import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'

import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
      currentKey: ''
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        const currentKey = window.location.hash.replace(/#|\?.*$/g, '')
        this.setState({
            currentKey,
            menuTreeNode
        })
    }
    handleClick = (item) => {
      const { dispatch } = this.props;
      // console.log(item.item.props.children.props.children);
      dispatch(switchMenu(item.item.props.children.props.children))
      this.setState({
          currentKey: item.key
      })
    }
    // 菜单渲染  递归
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {
                            this.renderMenu(item.children)
                        }
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Ant Design React</h1>
                </div>
                <Menu
                    theme="dark"
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentKey]}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft)
