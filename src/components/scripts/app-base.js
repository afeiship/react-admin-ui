import nx from 'next-js-core2';
import {ReduxAppBase} from 'next-react-redux';
import 'next-hashlize';


export default class extends ReduxAppBase {
  constructor(props) {
    super(props);

    nx.mix(this, {
      $: props.$,
      $hash: nx.hashlize()
    });

    //fastclick:
    // FastClick.attach(document.body);
  }
}
