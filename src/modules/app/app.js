import AppBase from 'components/scripts/index';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Comp1 from './comp1';
import Login from './login';
import Test1 from './test1';
import AForm from './a-form';

export default class extends AppBase {

  static initialState() {
    return {
      memory: {
        initialData: {
          tes: 123,
          age: 100,
          items: []
        },
        myInitial: 0,
        sum: 0
      },
      local: {
        test: 200,
        store: 0,
        items: [
          {key: 1}
        ]
      },
      session: {
        afei: 'session test..'
      }
    }
  }


  @autobind
  _onClick() {
    let {test} = AppBase.$.local;
    let {sum} = AppBase.$.memory;

    test++;
    sum += 10;
    AppBase.$.local = {test: test};
    AppBase.$.memory = {sum};

  }

  render() {
    return (
      <Router>
        <section className="route-wrapper">
          <ul>
            <li><Link replace to="/comp1">Comp1</Link></li>
            <li><Link replace to="/login">Login</Link></li>
          </ul>
          <Route path="/" component={Test1}/>
          <Route exact path="/" component={AForm}/>
          <Route path="/comp1" component={Comp1}/>
          <Route path="/login" component={Login}/>
        </section>
      </Router>
    );
  }
}
