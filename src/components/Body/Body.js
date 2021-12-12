import React from 'react';
import Header from '../Header/Header';
import Menu from './Menu';
import Table from './Table';
import TableInventory from './TableInventory';
import TableCollections from './TableCollections';
import Product from './Product';
import CreateProduct from './CreateProduct';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleProductsChange = this.handleProductsChange.bind(this);
    this.handleInventoryChange = this.handleInventoryChange.bind(this);
    this.handleCollectionsChange = this.handleCollectionsChange.bind(this);
    this.handleSingleProductChange = this.handleSingleProductChange.bind(this);
    this.handleSingleCollectionChange = this.handleSingleCollectionChange.bind(this);
    this.state = { 
      token: '',
      products: [],
      inventory: [],
      currentProduct: '',
      currentTab: '',
      collections: [],
      currentCollection: {}
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

  handleCollectionsChange(value) {
    console.log(value, 'Collections')
    this.setState({ collections: value });
  }

  handleSingleProductChange(value) {
    console.log(value, 'product')
    this.setState({ currentProduct: value });
  }

  handleSingleCollectionChange(value) {
    console.log(value, 'collection')
    this.setState({ currentCollection: value });
  }

  handleTabChange(value) {
    console.log(value, 'Tab')
    this.setState({ currentTab: value });
  }

  render() {
    const token = this.state.token;
    const tab = this.state.currentTab;
    const products = this.state.products;
    const inventory = this.state.inventory;
    const product = this.state.currentProduct;
    const collections = this.state.collections;
    const collection = this.state.currentCollection;

    return (
      <div >
        <Header 
          token={token}
          onTokenChange={this.handleTokenChange}
        />
        <div className="container">
          <p>{collection.id}</p>
        <Menu
          token={token}
          onProductsChange={this.handleProductsChange}
          onInventoryChange={this.handleInventoryChange}
          onCollectionsChange={this.handleCollectionsChange}
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
           tab === 'Collections' ? 
           <TableCollections
           token={token}
           collections={collections}
           onCollectionsChange={this.handleCollectionChange}
           onSingleCollectionChange={this.handleSingleCollectionChange}
         /> : ''
         }
        {
          product ? <Product product={product} /> :
          <p>No product available to show</p>
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