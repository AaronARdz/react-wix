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

  changeTab(value) {
    this.HandleTabChange(value);
  }

  getAllProducts(token) {
    API.products.getAllProducts(token).then((res) => {
      console.log(res.data.data)
      this.ProductsChange(res.data.data.products)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getInventory(token) {
    API.inventory.getInventory(token).then((res) => {
      console.log(res.data.data);
      this.HandleInventoryChange(res.data.data.inventoryItems);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getCollections(token) {
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
    const currentTab = this.props.tab;
    
    return (
      <div className="row">
        <ul className="nav nav-tabs col-12">
          <li className="nav-item">
            <button className={"nav-link " + (currentTab=== 'Products' ? "active" : '') }
            onClick={() => this.changeTab('Products')}
            >Products</button>
          </li>
          <li className="nav-item">
            <button className={"nav-link " + (currentTab=== 'Inventory' ? "active" : '') }
             onClick={() => this.changeTab('Inventory')}
            >Inventory</button>
          </li>
          <li className="nav-item">
            <button className={"nav-link " + (currentTab=== 'Collections' ? "active" : '') }
             onClick={() => this.changeTab('Collections')}
            >Collections</button>
          </li>
        </ul>
        <div className="col-12">
          <div className="row mt-4">
            <div className="col-4">
              <button className="btn btn-success" onClick={() => this.getAllProducts(currentToken)} >Refresh Products</button>
            </div>
            <div className="col-4">
              <button className="btn btn-success" onClick={() => this.getInventory(currentToken)} >Refresh Inventory</button>
            </div>
            <div className="col-4">
              <button className="btn btn-success" onClick={() => this.getCollections(currentToken)} >Refresh Collections</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;