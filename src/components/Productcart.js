import "../style/style.css";
import "../style/bootstrap.min.css";

function Productcart(props) {
  return (
    <div className="row">
      <div className="col-md-3 text-left">
        <img
          src={require('../images/Shop/' + props.img)}
          alt=""
          className="img-fluid d-none d-md-block rounded mb-2 shadow "
        />
      </div>
      <div className="col-md-9 text-left mt-sm-2">
        <h4>{props.name}</h4>
        <p className="font-weight-light">
          Edition &amp; {props.edition}<sup>th</sup>
        </p>
      </div>
    </div>
  );
};
export default Productcart;
