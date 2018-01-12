var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

var TodoComponent = CreateReactClass({
  render: function(){
    return(
      <div>
        <h1>Hello</h1>
        <p>Ninja</p>
        <p>{this.props.mssg}</p>
        <p>{this.props.cheese.price}</p>
      </div>
    );
  }
});


var myCheese = {name: 'Camembert', smellFactor: 'extreme', price: '3.5'};

ReactDOM.render(<TodoComponent mssg="hav" cheese={myCheese} />, document.getElementById('todo-wrapper'));






