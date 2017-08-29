import AppBase from 'components/scripts/index';
import Comp1 from './comp1';
import AForm from './a-form';
import Login from './login';
import Test1 from './test1';

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
    const {test} = AppBase.$.local;
    return (
      <div className="blank-module-view">
        member-list.1212...{test}
        <Comp1 />
        <Login />
        <button className="dc-button" onClick={this._onClick}>TEST</button>
      </div>
    );
  }

}
