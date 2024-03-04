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
    setProducts((products) => products.push(product));
    console.log(setProducts);
  };

  return (
    <>
      <Header onShowForm={handleClickShow} />
      {isShow ? <Form onAddProduct={handleAddProduct} /> : <ProductList />}
    </>
  );
}

export default App;
