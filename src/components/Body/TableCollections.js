import React from 'react';
import API from '../../api/index';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.HandleCollectionsChange = this.HandleCollectionsChange.bind(this);
    this.SingleCollectionChange = this.SingleCollectionChange.bind(this);
  }

  HandleCollectionsChange(collections) {
    this.props.onCollectionsChange(collections);
  }
  
  SingleCollectionChange(collection) {
    this.props.onSingleCollectionChange(collection);
  }

  getCollection(token, id) {
    API.collections.getCollectionByID(token, id).then((res) => {
      console.log(res.data.data)
      this.SingleCollectionChange(res.data.data.collection)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const array = this.props.collections;
    const currentToken = this.props.token;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                <button 
                  className="btn btn-primary" 
                  onClick={() => this.getCollection(currentToken, item.id)} >
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

export default Collections;