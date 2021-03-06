import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';

import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from './pages/city';
import Order from './pages/order';

import Common from './common.js';
import OrderDetail from './pages/order/detail';

import LoginForm from './pages/form/login';
import LoginRegister from './pages/form/register';

import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'

import RichText from './pages/rich'
import Permission from './pages/permission'

import Login from './pages/login';
import Home from './home.js';
import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    } />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notification}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/form/login" component={LoginForm}></Route>
                                <Route path="/admin/form/reg" component={LoginRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/city" component={City}></Route>
                                <Route path="/admin/order" component={Order}></Route>
                                <Route path="/admin/charts/bar" component={Bar}></Route>
                                <Route path="/admin/charts/pie" component={Pie}></Route>
                                <Route path="/admin/charts/line" component={Line}></Route>
                                <Route path="/admin/rich" component={RichText}></Route>
                                <Route path="/admin/user" component={RichText}></Route>
                                <Route path="/admin/bikeMap" component={Line}></Route>
                                <Route path="/admin/permission" component={Permission}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}
