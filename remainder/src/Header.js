import "./globalStyle.css";

function Header() {
  return (
    <div className="container-header">
      <nav className="navbar bg-body-tertiary">
        <div className="Header container-fluid">
          <a className="header-font navbar-brand" href="header">
            Remainder 📝
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
