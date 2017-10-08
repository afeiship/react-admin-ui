import nx from 'next-js-core2';
import {ReduxAppBase} from 'next-react-redux';
import {notification} from 'antd';

export default class extends ReduxAppBase {
  static message(inMsg, inType) {
    notification[inType || 'info']({
      message: '提示',
      description: inMsg
    });
  }
}
