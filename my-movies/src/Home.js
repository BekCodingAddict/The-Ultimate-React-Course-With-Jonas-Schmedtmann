import Loader from "./Loader";
import ErrorMassage from "./ErrorMassage";
import "./home.css";

function Home({ movies, isLoading, error }) {
  return (
    <div className="container">
      {/* <div className="view"></div> */}
      <div className="movies-grid">
        {isLoading && <Loader />}
        {!isLoading &&
          !error &&
          movies.map((movie) => (
            <ShowMovies movie={movie} key={movie.imdbID} />
          ))}
        {error && <ErrorMassage message={error} />}
      </div>
    </div>
  );
}

export default Home;

function ShowMovies({ movie }) {
  return (
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
  );
}
