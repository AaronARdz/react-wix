import React from 'react';
import Header from '../Header/Header';
import Menu from './Menu';
import Table from './Table';
import Product from './Product';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleProductsChange = this.handleProductsChange.bind(this);
    this.handleSingleProductChange = this.handleSingleProductChange.bind(this);
    this.state = { 
      token: '',
      products: [],
      inventory: [],
      currentProduct: ''
    };
  }

  handleTokenChange(value) {
    this.setState({ token: value });
  }

  handleProductsChange(value) {
    console.log(value, 'ddd')
    this.setState({ products: value });
  }

  handleSingleProductChange(value) {
    console.log(value, 'product')
    this.setState({ currentProduct: value });
  }

  render() {
    const token = this.state.token;
    const products = this.state.products;
    const inventory = this.state.inventory;
    const product = this.state.currentProduct;

    return (
      <div >
        <Header 
        token={token}
        onTokenChange={this.handleTokenChange}
        />
        <div class="container">
        <Menu
          token={token}
          onProductsChange={this.handleProductsChange}
         />
        <Table
          products={products}
          token={token}
          onProductChange={this.handleSingleProductChange}
        />
        {
          product ? <Product product={product} /> :
          <p>No product available</p>
        }
        
        </div>
      </div>
    )
  }
}

export default Body;