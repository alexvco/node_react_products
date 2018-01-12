var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');



var Product = CreateReactClass({
  getInitialState: function() {
    return {qty: 0};
  },

  buy: function() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price);
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
        <h3>Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
});





var ProductForm = CreateReactClass({
  submit: function(e){
    e.preventDefault();
    
    var product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    }

    this.props.handleCreate(product);

    this.refs.name.value = "";
    this.refs.price.value = "";
  },

  render: function() {
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Product Name" ref="name" /> - 
        <input type="text" placeholder="Product Price" ref="price" />
        <br />
        <br />
        <button>Create Product</button>
        <hr />
      </form>
    );
  }
});





var ProductList = CreateReactClass({
  getInitialState: function() {
    return ({
      total: 0,
      productList: [
        {name: "Android", price: 121},
        {name: "Apple", price: 123},
        {name: "Nokia", price: 65}
      ]
    });
  },

  createProduct: function(product){
    this.setState({
      productList: this.state.productList.concat(product) // concat is a javascript function that pushes item into end of array
    })
  },

  calculateTotal: function(price){
    this.setState({total: this.state.total + price});
  },

  showProduct: function(name) {
    alert("You selected " + name);
  },

  render: function() {
    var component = this; // because this doesnt refer to ProductList in the following callback function
    var products = this.state.productList.map(function(product){
      return(
        <Product name={product.name} price={product.price} handleShow={component.showProduct} handleTotal={component.calculateTotal} />
      );
    });

    return(
      <div>
        <ProductForm handleCreate={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
});










ReactDOM.render(<ProductList />, document.getElementById('root'));







