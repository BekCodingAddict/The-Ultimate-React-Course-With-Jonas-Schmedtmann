import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  function handleClick(ev) {
    setIsOpen((cur) => !cur);
  }

  return (
    <div>
      <Header setMovies={setMovies} />

      {users.length !== 0 ? (
        <Home movies={movies} />
      ) : isOpen ? (
        <SignUp onOpen={handleClick} setUsers={setUsers} />
      ) : (
        <SignIn onOpen={handleClick} />
      )}
    </div>
  );
}

export default App;
