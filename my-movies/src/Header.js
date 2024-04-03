import { useState } from "react";
const axios = require("axios");

function Header({ setMovies }) {
  const [movie, setMovie] = useState("");
  const KEY = "2a5d4900";

  function handleSearch(e) {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${movie}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
    setMovie("");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
      <div className="container-fluid ">
        <a className="navbar-brand text-light" href="#id">
          MY Movies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="22"
            fill="currentColor"
            className="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
          </svg>
        </a>

        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#id
              "
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#id
              "
              >
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#id
              "
              >
                Cartoons
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#id
                "
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item "
                    href="#id
                  "
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#id
                  "
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#id
                  "
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#id
                "
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
