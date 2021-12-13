import React from 'react';
import Header from '../Header/Header';
import Menu from './Menu';
import Table from './Table';
import TableInventory from './TableInventory';
import TableCollections from './TableCollections';
import Product from './Product';
import CreateProduct from './CreateProduct';
import AddProductToCollection from './AddProducts';

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
        <Menu
          token={token}
          tab={tab}
          onProductsChange={this.handleProductsChange}
          onInventoryChange={this.handleInventoryChange}
          onCollectionsChange={this.handleCollectionsChange}
          onTabChange={this.handleTabChange}
         />
         <hr></hr>
         {/* TODO: BETTER SOLUTION TO SHOW TABLES */}
         {
           tab === 'Products' ? 
           <div>
            <Table
            products={products}
            token={token}
            onProductChange={this.handleSingleProductChange}
          />
          <CreateProduct token={token}/>
          { product ? 
          <Product product={product} /> :
          <p>No product available to show</p>
          }
          </div>
         : ''
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
           <div>
            <TableCollections
              token={token}
              collections={collections}
              collection={collection}
              onCollectionsChange={this.handleCollectionChange}
              onSingleCollectionChange={this.handleSingleCollectionChange}
            />
            <AddProductToCollection token={token} />
           </div> : ''
         }
        <hr></hr>
        </div>
      </div>
    )
  }
}

export default Body;