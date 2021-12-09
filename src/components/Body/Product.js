function Product(props) {
  const product = props.product;
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.media.mainMedia.image.url} className="img-fluid rounded-start" alt="dd">
          </img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            {product.description}
            <p className="card-text"><small className="text-muted">{product.additionalInfoSections[0].title}</small></p>
            <p className="card-text"><small className="text-muted">{product.additionalInfoSections[0].description}</small></p>
            <p className="card-text"><small className="text-muted">{product.price.price} {product.price.currency}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;