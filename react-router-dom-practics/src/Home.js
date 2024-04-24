import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
