import React from 'react';
import API from '../../api/index';

class Menu extends React.Component  {
  constructor(props) {
    super(props);
    this.ProductsChange = this.ProductsChange.bind(this);
    this.HandleTabChange = this.HandleTabChange.bind(this);
    this.HandleInventoryChange = this.HandleInventoryChange.bind(this);
    this.HandleCollectionsChange = this.HandleCollectionsChange.bind(this);
  }

  ProductsChange(value) {
    this.props.onProductsChange(value);
  }

  HandleInventoryChange(value) {
    this.props.onInventoryChange(value);
  }

  HandleCollectionsChange(value) {
    this.props.onCollectionsChange(value);
  }

  HandleTabChange(value) {
    this.props.onTabChange(value);
  }

  getAllProducts(token) {
    console.log(token)
    this.HandleTabChange('Products');
    API.products.getAllProducts(token).then((res) => {
      console.log(res.data.data)
      this.ProductsChange(res.data.data.products)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getInventory(token) {
    this.HandleTabChange('Inventory');
    API.inventory.getInventory(token).then((res) => {
      console.log(res.data.data);
      this.HandleInventoryChange(res.data.data.inventoryItems);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getCollections(token) {
    this.HandleTabChange('Collections');
    API.collections.getCollections(token).then((res) => {
      console.log(res.data.data);
      this.HandleCollectionsChange(res.data.data.collections);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const currentToken = this.props.token;

    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <button className="nav-link" onClick={() => this.getAllProducts(currentToken)} >Products</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => this.getInventory(currentToken)} >Inventory</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => this.getCollections(currentToken)} >Collections</button>
        </li>
      </ul>
    )
  }
}

export default Menu;