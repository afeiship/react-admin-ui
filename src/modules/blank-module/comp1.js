import AppBase from 'components/scripts/index';

export default class extends React.Component {
  render() {
    console.log('comp1 render...');
    return (
      <div className="comp1">
        <pre><code>
          {
            JSON.stringify(AppBase.$.memory, null, 4)
          }
        </code></pre>
      </div>
    )
  }
}