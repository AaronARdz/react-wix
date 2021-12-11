import React from 'react';
import API from '../../api/index';
class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      response: "",
      product : {
        name: "",
        productType: "unspecified_product_type",
        priceData: {
          price: ""
        },
        description: "",
        sku: "",
        visible: true,
        ribbon: "sale",
        brand: "Weship",
        weight: 0.2,
        discount: {
          type: "AMOUNT",
          value: 1
        },
        manageVariants: true,
        productOptions: [
          {
            name: "Size",
            choices: [
                {
                  value: "S",
                  description: "S"
                },
                {
                  value: "L",
                  description: "L"
                }
              ]
            }
        ]
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'price') {
      return
    }
    let property = this.state.product;
    property[name] = value;

    this.setState({property});
  }

  handlePriceChange(event) {
    let property = this.state.product;
    property.priceData.price = event.target.value;
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
    modal.className += " d-nonde";
    modal.classList.remove("show");
    modal.classList.remove("d-block");
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.product);
    event.preventDefault();
    const token = this.props.token;
    this.showModal()
    API.products.createProduct(token, JSON.stringify(this.state.product))
      .then((res) => {
        if (res.data.status === 'success') {
          this.setState({ response: "Producto Creado exitosamente" });
        } else {
          this.setState({ response: res.data.message });
        }
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error.message)
    })
  }

  render() {
    const message = this.state.response;
    return (
      <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Create product</h4>
      <form className="needs-validation" onSubmit={this.handleSubmit}>
        <div className="row g-3 mb-4">
          <div className="col-sm-6">
            <label className="form-label">Name</label>
            <input type="text"
            name="name"
            className="form-control" placeholder="" onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product name is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Description</label>
            <input type="text" 
            name="description"
            className="form-control" placeholder="" value={this.state.product.description} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product description is required
            </div>
          </div>

          <fieldset class="row mt-3">
            <legend class="col-form-label col-sm-4 pt-0">Product type</legend>
            <div class="col-sm-8">
              <div className="form-check">
                <input className="form-check-input" 
                value="physical"
                onChange={this.handleChange}
                checked={this.state.product.productType === "physical"}
                type="radio" name="productType" ></input>
                <label className="form-check-label">
                  Physical
                </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input"
                  value="digital"
                  onChange={this.handleChange}
                  type="radio" name="productType" checked={this.state.product.productType === "digital"}></input>
                  <label className="form-check-label">
                    Digital
                  </label>
                </div>
            </div>
          </fieldset>
          
          <div className="col-sm-6">
            <label className="form-label">Price</label>
            <div className="input-group has-validation">
              <span className="input-group-text">$</span>
              <input type="text" 
              className="form-control" placeholder="3.00" onChange={this.handlePriceChange}></input>
              <div className="invalid-feedback">
                Price is required
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Brand</label>
            <input type="text" 
            name="brand"
            className="form-control" placeholder="Weship" value={this.state.product.brand} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product brand is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Product weight</label>
            <input type="text" 
            name="weight"
            className="form-control" placeholder="" value={this.state.product.weight} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product weight
            </div>
          </div>
        <button className="w-100 btn btn-primary btn-lg" type="submit">Submit product</button>
        </div>
      </form>
        <div ref={this.myRef} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button 
              onClick={() => this.closeModal()}
              type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{ message }</p>
            </div>
            <div class="modal-footer">
              <button type="button" 
              class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.closeModal()}>Close</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default CreateProduct;