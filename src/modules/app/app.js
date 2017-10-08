import AppBase, {$api, $store} from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './login';
import Admin from './admin';
import UserIndex from './admin/users/index';
import OrderIndex from './admin/orders/index';
import AdIndex from './admin/ads/index';

export default class extends AppBase {

  static initialState() {
    const {login} = $store.local;
    return {
      local: {
        login: login || null
      }
    }
  }

  render() {
    return (
      <Router>
        <section className="route-wrapper">
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/admin/users/index" component={UserIndex}/>
          <Route path="/admin/orders/index" component={OrderIndex}/>
          <Route path="/admin/ads/index" component={AdIndex}/>
        </section>
      </Router>
    );
  }
}
