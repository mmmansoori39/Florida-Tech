import "../style/style.css";
import "../style/bootstrap.min.css";

function homecomp() {
  return (
    <section>
      <h1 className="text-lg-center py-4 my-3">
        Welcome to Florida Tech Book Store
      </h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../images/slide1.png")}
              className="d-block w-100"
              alt="..."
              style={{ height: 600 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/slide2.png")}
              className="d-block w-100"
              alt="..."
              style={{ height: 600 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../images/slide3.png")}
              className="d-block w-100"
              alt="..."
              style={{ height: 600 }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  );
}
export default homecomp;
