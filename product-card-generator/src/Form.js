import { useState } from "react";

function Form({ onAddProduct }) {
  const [product, setProduct] = useState({
    id: Math.floor(Math.random() * 1000),
    productName: "",
    price: "",
    brand: "",
    category: "",
    images: "",
  });

  const handleSubmin = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product.id,
      productName: product.productName,
      description: product.description,
      price: product.price,
      brand: product.brand,
      category: product.category,
      images: product.images,
    };
    console.log(newProduct);
    onAddProduct(newProduct);
  };

  return (
    <div className="form-class">
      <form onSubmit={handleSubmin}>
        <label className="form-label">Product Name</label>
        <input
          className="form-control"
          placeholder="Product Name..."
          type="text"
          value={product.productName}
          onChange={(e) =>
            setProduct({ ...product, productName: e.target.value })
          }
        />

        <label className="form-label">Description</label>
        <input
          className="form-control"
          placeholder="Description..."
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        <label className="form-label">Price</label>
        <input
          className="form-control"
          placeholder="Price..."
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <label className="form-label">Brand</label>
        <input
          className="form-control"
          placeholder="Brand..."
          type="text"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        />

        <label className="form-label">Category</label>
        <input
          className="form-control"
          placeholder="Category..."
          type="text"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />

        <label className="form-label">Images</label>
        <input
          className="form-control"
          placeholder="Type to search..."
          type="text"
          value={product.images}
          onChange={(e) => setProduct({ ...product, images: e.target.value })}
        />
        <div className="form-buttons">
          <button className="btn btn-secondary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
