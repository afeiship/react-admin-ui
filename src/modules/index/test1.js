import {Card} from 'antd';
import AppBase from 'components/scripts/index';


export default class extends React.PureComponent {

  render() {
    // const frag = createFragment({
    //   'h1': <h1>Test title1</h1>,
    //   'h2': <h2>Test title2</h2>
    // });
    const {formValue, ts} = AppBase.$.memory;

    console.log('redux react...');
    return (
      <Card title="DEOM with redux-base">
        <h1>TS: {ts}</h1>
        <pre>
          <code>
            {
              JSON.stringify(formValue, null, 4)
            }
          </code>
        </pre>
      </Card>
    )
  }
}
