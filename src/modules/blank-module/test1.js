import {Card} from 'antd';
import AppBase from 'components/scripts/index';
import {$api} from 'services/api';


export default class extends React.Component {
  static displayName = 'Test1';

  shouldComponentUpdate(){
    return true;
  }


  componentWillMount() {
    $api.xxDate().then((response)=>{
      AppBase.$.memory = {
        username: response.username
      }
    });
  }


  render() {
    console.log('render...');
    const {ts} = AppBase.$.memory;
    return (
      <h1>I am test1 component , everybody can see me! TS: {ts}</h1>
    )
  }
}
