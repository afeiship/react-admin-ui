import AppBase, {$api, $store} from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Login from './login';
import Admin from './admin';

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
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </section>
      </Router>
    );
  }
}
