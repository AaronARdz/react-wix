import React from 'react';
import Header from '../Header/Header';
import Menu from './Menu';
import Table from './Table';
import TableInventory from './TableInventory';
import Product from './Product';
import CreateProduct from './CreateProduct';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleProductsChange = this.handleProductsChange.bind(this);
    this.handleInventoryChange = this.handleInventoryChange.bind(this);
    this.handleSingleProductChange = this.handleSingleProductChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = { 
      token: '',
      products: [],
      inventory: [],
      currentProduct: '',
      currentTab: ''
    };
  }

  handleTokenChange(value) {
    this.setState({ token: value });
  }

  handleProductsChange(value) {
    console.log(value, 'Products')
    this.setState({ products: value });
  }

  handleInventoryChange(value) {
    console.log(value, 'Inventory')
    this.setState({ inventory: value });
  }

  handleSingleProductChange(value) {
    console.log(value, 'product')
    this.setState({ currentProduct: value });
  }

  handleTabChange(value) {
    console.log(value, 'Tab')
    this.setState({ currentTab: value });
  }

  render() {
    const token = this.state.token;
    const products = this.state.products;
    const inventory = this.state.inventory;
    const product = this.state.currentProduct;
    const tab = this.state.currentTab;

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
          onInventoryChange={this.handleInventoryChange}
          onTabChange={this.handleTabChange}
         />
         <hr></hr>
         {/* TODO: BETTER SOLUTION TO SHOW TABLES */}
         {
           tab === 'Products' ? 
           <Table
           products={products}
           token={token}
           onProductChange={this.handleSingleProductChange}
         /> : ''
         }
        {
           tab === 'Inventory' ? 
           <TableInventory
           inventory={inventory}
           onInventoryChange={this.handleInventoryChange}
         /> : ''
         }
        {
          product ? <Product product={product} /> :
          <p>No product available</p>
        }
        <p>{tab}</p>
        <hr></hr>
        <CreateProduct
          token={token}
           />
        </div>
      </div>
    )
  }
}

export default Body;