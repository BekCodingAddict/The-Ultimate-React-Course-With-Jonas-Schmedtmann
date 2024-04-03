import "./home.css";

function Home({ movies }) {
  return (
    <div className="container">
      {/* <div className="view"></div> */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="box" key={movie.imdbID}>
            <div
              className="card"
              style={{
                background: `url(${movie.Poster})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="movie-info">
              <h6>{movie.Title}</h6>
              <p>Year: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
