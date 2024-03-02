import Header from "./Header";
import Footer from "./Footer";
import Remainders from "./Remainders";
import "./index.css";
import AddForm from "./AddForm";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [remainders, setRemainders] = useState([]);

  const addNewRemainder = (remainder) => {
    setRemainders((remainders) => [...remainders, remainder]);
  };

  const deleteRemainder = (id) => {
    setRemainders((remainders) =>
      remainders.filter((remainder) => remainder.id !== id)
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRemainder = {
      title,
      date: new Date().toJSON().slice(0, 10),
      id: Date.now(),
    };
    addNewRemainder(newRemainder);
    setTitle("");
  };

  return (
    <div>
      <Header />
      <AddForm onSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <Remainders remainders={remainders} onDelete={deleteRemainder} />
      <Footer />
    </div>
  );
}

export default App;
