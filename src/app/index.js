var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var Product = CreateReactClass({
  getInitialState: function() {
    return {qty: 0};
  },

  buy: function() {
    this.setState()
  },

  render: function(){
    return(
      <div>
        <p>Android - $199</p>
        <button onClick={this.buy}>Buy</button>
      </div>
    );
  }
});


ReactDOM.render(<Product />, document.getElementById('root'));







