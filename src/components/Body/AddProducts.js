import React from 'react';
import API from '../../api/index';

class AddProductToCollection extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      response: "",
      productId: '',
      body : {
        id: "",
        productIds: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleProductsChange = this.handleProductsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let property = this.state.body;
    property[name] = value;

    this.setState({property});
  }

  handleProductsChange(event) {
    const productId = event.target.value;
    this.setState({ productId });
  }

  pushProduct() {
    let property = this.state.body;
    property.productIds.push(this.state.productId)
    this.setState({ property });
  }

  showModal() {
    const modal = this.myRef.current;
    modal.setAttribute("role", "dialog")
    modal.ariaModal = "true";
    modal.className += " show d-block";
  }

  closeModal() {
    const modal = this.myRef.current;
    modal.ariaModal = "false";
    modal.className += " d-none";
    modal.classList.remove("show");
    modal.classList.remove("d-block");
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = this.props.token;
    this.showModal()
    API.collections.addProducts(token, JSON.stringify(this.state.body))
      .then((res) => {
        if (res.data.status === 'success') {
          this.setState({ response: "Producto Añadido exitosamente" });
        } else {
          this.setState({ response: res.data.message });
        }
      })
      .catch((error) => {
        console.error(error.message)
    })
  }

  render() {
    const message = this.state.response;
    const ids = this.state.body.productIds;

    return (
      <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Add product to collection</h4>
      <form className="needs-validation" onSubmit={e => e.preventDefault()}>
        <div className="row g-3 mb-4">
          <div className="col-sm-12">
            <label className="form-label">Collection Id</label>
            <input type="text"
            name="id"
            className="form-control" 
            value={this.state.body.id}  
            onChange={this.handleChange}></input>
          </div>

          <div className="col-sm-12">
            {ids}
            <label className="form-label">Product Ids</label>
            <input type="text" 
            name="productIds"
            className="form-control" 
            placeholder=""
            onChange={this.handleProductsChange}
            ></input>
            <button className="mt-2 btn btn-success btn" onClick={() => this.pushProduct()}>Add product</button>
          </div>

        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={this.handleSubmit} >Submit product</button>
        </div>
      </form>
        <div ref={this.myRef} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add product to collection</h5>
              <button 
              onClick={() => this.closeModal()}
              type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{ message }</p>
            </div>
            <div className="modal-footer">
              <button type="button" 
              className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.closeModal()}>Close</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AddProductToCollection;
