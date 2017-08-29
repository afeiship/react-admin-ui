import {Card, Form, Icon, Input, Button} from 'antd';
import AppBase from 'components/scripts/index';
const FormItem = Form.Item;
const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};

export default Form.create()(class extends React.Component {

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }


  _onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        AppBase.$.memory = {
          formValue: values
        };
      }
    });
  };

  render() {
    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Card title="LOGIN with form">
        <Form layout="inline" onSubmit={this._onSubmit}>
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
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

});