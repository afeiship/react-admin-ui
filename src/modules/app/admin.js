import AppBase from 'components/scripts/index';
import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import UserIndex from './admin/users/index';
import ReactStatusManager from 'react-status-manager';


export default class extends React.Component {

  state = {
    collapsed: false,
    activeRoute: '/admin/users/index'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  _onMenuClick = e => {
    console.log(e);
    this.setState({
      activeRoute: e.key
    })
  };

  render() {
    return (
      <Layout className="main-view">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="p10 logo mb30">
            <h1 className="c-f">tradewow</h1>
            <h3 className="c-e">后台管理</h3>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.activeRoute]} onClick={this._onMenuClick}>
            <Menu.Item key="/admin/users/index">
              <Icon type="user"/>
              <span className="nav-text">用户管理</span>
            </Menu.Item>
            <Menu.Item key="/admin/orders/index">
              <Icon type="tag"/>
              <span className="nav-text">订单管理</span>
            </Menu.Item>
            <Menu.Item key="/admin/ads/index">
              <Icon type="notification"/>
              <span className="nav-text">广告设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}/>
          <Content style={{margin: '24px 16px 0'}}>
            <ReactStatusManager style={{padding: 24, background: '#fff', minHeight: 360}}
                                status={this.state.activeRoute} statusList={[
              '/admin/users/index',
              '/admin/orders/index',
              '/admin/ads/index',
            ]}>
              <span>usrs</span>
              <span>orders</span>
              <span>ads</span>
            </ReactStatusManager>

          </Content>
          <Footer style={{textAlign: 'center'}}>
            TradeWow admin @Power by RemoteX team.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}