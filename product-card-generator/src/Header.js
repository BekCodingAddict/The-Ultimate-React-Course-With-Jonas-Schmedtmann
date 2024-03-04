import logo from "./logo.svg";
import "./App.css";

function Header({ onShowForm }) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Product Generator App</h1>
        <button onClick={onShowForm}>ADD +</button>
      </header>
    </div>
  );
}

export default Header;
