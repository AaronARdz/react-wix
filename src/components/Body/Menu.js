import React from 'react';
import API from '../../api/index';

class Menu extends React.Component  {
  constructor(props) {
    super(props);
    this.ProductsChange = this.ProductsChange.bind(this);
  }

  ProductsChange(value) {
    this.props.onProductsChange(value);
  }

  getAllProducts(token) {
    console.log(token)
    API.products.getAllProducts(token).then((res) => {
      console.log(res.data.data)
      this.ProductsChange(res.data.data.products)
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
          <button className="nav-link" href="#">Inventory</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="#">Collections</button>
        </li>
      </ul>
    )
  }
}

export default Menu;