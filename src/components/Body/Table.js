import React from 'react';
import API from '../../api/index';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.ProductChange = this.ProductChange.bind(this);
  }

  ProductChange(value) {
    this.props.onProductChange(value);
  }

  getProduct(token, id) {
    API.products.getProduct(token, id).then((res) => {
      console.log(res.data.data.product)
      this.ProductChange(res.data.data.product)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const array = this.props.products;
    const currentToken = this.props.token;

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">NumericId</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.numericId}</td>
                <td>{item.name}</td>
                <td>{item.price.price}</td>
                <td>
                <button 
                  className="btn btn-primary" 
                  onClick={() => this.getProduct(currentToken, item.id)} >
                  Ver</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    )
  }
}

export default Table;