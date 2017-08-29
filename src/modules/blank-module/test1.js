import {Card} from 'antd';
import AppBase from 'components/scripts/index';


export default class extends React.Component {
  static displayName = 'Test1';

  shouldComponentUpdate(){
    return true;
  }

  render() {
    console.log('render...');
    const {ts} = AppBase.$.memory;
    return (
      <h1>TS: {ts}</h1>
    )
  }
}
