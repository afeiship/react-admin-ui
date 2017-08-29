import {Row, Col, Card, message, Button} from 'antd';
import AppBase from 'components/scripts/index';


export default class extends React.PureComponent {
  _onClick = e => {
    message.success("Oh, Antd works!");
    AppBase.$.memory = {
      ts: Date.now()
    };
  };

  render() {
    return (
      <Row align='middle' justify="center">
        <Col span={18}>
          <Card title="Login" extra="More">
            Login content..
            <Button type="primary" onClick={this._onClick}>Show Message</Button>
          </Card>
        </Col>
      </Row>
    )
  }
}
