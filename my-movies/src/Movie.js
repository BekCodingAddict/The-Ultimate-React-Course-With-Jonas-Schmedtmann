import Header from "./Header";
function Movie() {
  return (
    <div className="movie">
      <Header />
      <section>
        <p className="movie-Title">Avangers</p>
        <div className="content">
          <div className="details">
            <span>99% Match</span>
            <span>2011-1022</span>
            <span>18+</span>
          </div>
          <div className="buttons">
            <span className="btn1">
              <a href="https://www.youtube.com/embed/xjq5NDum_W0?si=8NRcFUuSg3S2ltfe">
                <i class="bi bi-play-fill"></i>
                Play
              </a>
            </span>

            <span className="btn2">+ My List</span>
          </div>
        </div>
      </section>

      <div className="sec">
        <div className="info">
          <span className="title">Season 1</span>
          <span className="btn3">Show More...</span>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Movie;
