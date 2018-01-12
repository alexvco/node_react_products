var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');



var Product = CreateReactClass({
  getInitialState: function() {
    return {qty: 0};
  },

  buy: function() {
    this.setState({qty: this.state.qty + 1});
  },

  show: function(){
    this.props.handleShow(this.props.name)
  },

  render: function(){
    return(
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <h3>Qty: {this.state.qty} item(s)</h3>
        <hr/>
      </div>
    );
  }
});




var Total = CreateReactClass({
  render: function() {
    return(
      <div>
        <h3>Total Cash: </h3>
      </div>
    );
  }
});




var ProductList = CreateReactClass({
  showProduct: function(name) {
    alert("You selected " + name);
  },

  render: function() {
    return(
      <div>
        <Product name="Android" price="121" handleShow={this.showProduct} />
        <Product name="Apple" price="123" handleShow={this.showProduct} />
        <Product name="Nokia" price="65" handleShow={this.showProduct} />
        <Total />
      </div>
    );
  }
});










ReactDOM.render(<ProductList />, document.getElementById('root'));







