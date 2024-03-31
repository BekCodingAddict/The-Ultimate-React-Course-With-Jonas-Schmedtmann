import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(ev) {
    setIsOpen((cur) => !cur);
  }
  return (
    <div>
      <Header />
      {isOpen ? (
        <SignUp onOpen={handleClick} />
      ) : (
        <SignIn onOpen={handleClick} />
      )}
    </div>
  );
}

export default App;
