import React from 'react';

class TableInventory extends React.Component {
  constructor(props) {
    super(props);
    this.InventoryChange = this.InventoryChange.bind(this);
  }

  InventoryChange(value) {
    this.props.onInventoryChange(value);
  }

  render() {
    const array = this.props.inventory;

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Id</th>
              <th scope="col">Last updated</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.productId}</td>
                <td>{item.LastUpdated}</td>
                <td>{item.variants[0].inStock ?
                     'yes' : 'no'
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableInventory;