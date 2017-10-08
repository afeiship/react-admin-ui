import {Card, Form, Icon, Input, Button} from 'antd';
import AppBase, {$api} from 'components/scripts/index';
const FormItem = Form.Item;
const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export default Form.create()(class extends React.Component {

  signin(inValues) {
    const {history} = this.props;
    $api.signin(inValues).then(login => {
      AppBase.$.local = {login};
      AppBase.message('Success!');
      history.push('/admin');
    });
  }

  _onSubmit = (e) => {
    const {form} = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.signin(values);
      }
    });
  };

  render() {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Card title="Tradewow-后台管理" className="login-view">
        <Form layout="vertical" onSubmit={this._onSubmit}>
          <FormItem
            validateStatus={usernameError ? 'error' : ''}
            help={usernameError || ''}>
            {
              getFieldDecorator('username', {
                rules: [{required: true, message: 'Please input your username!'}],
              })(<Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>)
            }
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}>
            {
              getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}],
              })(<Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>)
            }
          </FormItem>
          <FormItem className="tr mt10">
            <Button
              size="large"
              type="primary"
              className="mr5"
              htmlType="submit"
            >
              登录
            </Button>
            <Button size="large">取消</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

});