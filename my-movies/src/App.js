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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userExist, setUserExist] = useState(false);

  function handleClick() {
    setIsOpen((cur) => !cur);
  }

  return (
    <div>
      <Header
        setMovies={setMovies}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      {userExist ? (
        <Home movies={movies} error={error} isLoading={isLoading} />
      ) : !isOpen ? (
        <SignIn onOpen={handleClick} onUserExist={setUserExist} />
      ) : (
        <SignUp onOpen={handleClick} setUsers={setUsers} users={users} />
      )}
      {/* {userExist ? (
        <Home movies={movies} error={error} isLoading={isLoading} />
      ) : !isOpen ? (
        <SignIn onOpen={handleClick} onUserExist={setUserExist} />
      ) : (
        <SignUp onOpen={handleClick} setUsers={setUsers} users={users} /> */}
    </div>
  );
}

export default App;
