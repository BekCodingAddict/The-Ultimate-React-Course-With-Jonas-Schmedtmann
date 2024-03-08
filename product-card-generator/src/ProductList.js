function ProductList({ products }) {
  if (!products.length) {
    return (
      <div className="product-list">
        <p>here is no product added yet 🤷</p>
      </div>
    );
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="card">
          <div className="product-img">
            <img
              src={product.images}
              alt={product.productName}
              width="260px"
              height="auto"
            />
          </div>
          <div className="product-data">
            <h2>{product.productName}</h2>
            <p>
              <b>Brand :</b>
              {product.brand}
            </p>
            <p>
              <b>Category :</b>
              {product.category}
            </p>
            <p>
              <b>{product.description}</b>
            </p>
          </div>
          <div className="product-pricing">
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
