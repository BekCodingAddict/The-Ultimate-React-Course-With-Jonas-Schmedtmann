import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([
    { userName: "asaa", userEmail: "sndjsndj@skndj.com" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleClick(ev) {
    setIsOpen((cur) => !cur);
  }

  return (
    <div>
      <Header
        setMovies={setMovies}
        setIsLoading={setIsLoading}
        setError={setError}
      />

      {users.length !== 0 ? (
        <Home movies={movies} error={error} isLoading={isLoading} />
      ) : isOpen ? (
        <SignUp onOpen={handleClick} setUsers={setUsers} />
      ) : (
        <SignIn onOpen={handleClick} />
      )}
    </div>
  );
}

export default App;
