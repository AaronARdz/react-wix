import React from 'react';

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product : {
        name: "",
        productType: "",
        priceData: {
          price: ""
        },
        description: "",
        sku: "",
        visible: true,
        ribbon: "sale",
        brand: "",
        weight: "0.2",
        discount: {
          type: "Amount",
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

  handleSubmit(event) {
    console.log(this.state.product)
    alert('A name was submitted: ' + this.state.product);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Create product</h4>
      <form className="needs-validation" onSubmit={this.handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">Name</label>
            <input type="text"
            name="name"
            className="form-control" id="firstName" placeholder="" onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product name is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">description</label>
            <input type="text" 
            name="description"
            className="form-control" id="lastName" placeholder="" value={this.state.product.description} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product description is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">type</label>
            <input type="text" 
            name="productType"
            className="form-control" id="firstName" placeholder="" value={this.state.product.productType} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product Type is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">price</label>
            <div className="input-group has-validation">
              <span className="input-group-text">$</span>
              <input type="text" 
              className="form-control" id="username"  placeholder="3.00" onChange={this.handlePriceChange}></input>
              <div className="invalid-feedback">
                Price is required
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Brand</label>
            <input type="text" 
            name="brand"
            className="form-control" id="firstName" placeholder="Weship" value={this.state.product.brand} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product brand is required
            </div>
          </div>

          <div className="col-sm-6">
            <label className="form-label">Product weight</label>
            <input type="text" 
            name="weight"
            className="form-control" id="lastName" placeholder="" value={this.state.product.weight} onChange={this.handleChange}></input>
            <div className="invalid-feedback">
              Product weight
            </div>
          </div>
        <button className="w-100 btn btn-primary btn-lg" type="submit">Submit product</button>
        </div>
      </form>
      </div>
    )
  }
}

export default CreateProduct;