import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import ProductList from "./ProductList";
function App() {
  const [isShow, setIsShow] = useState(false);
  const [products, setProducts] = useState([]);

  const handleClickShow = (e) => {
    setIsShow((current) => !current);
  };

  const handleAddProduct = (product) => {
    setProducts((prevProduct) => [...prevProduct, product]);
    console.log(products);
  };

  return (
    <>
      <Header onShowForm={handleClickShow} />
      {isShow ? (
        <Form onAddProduct={handleAddProduct} />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}

export default App;
