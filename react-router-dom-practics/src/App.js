import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
