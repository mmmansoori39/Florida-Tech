import "../style/style.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Logo from "../images/Shop/11_mediumf020.png"

function Shopitem(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid3">
        <div className="product-image3">
          <Link to="/bookdetails">
            <img
              className="pic-1"
              src={require("../images/Shop/" + props.img)}
            />
            <img
              className="pic-2"
              src={require("../images/Shop/" + props.img)}
            />
          </Link>
          <ul class="social">
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag"></i>
              </a>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
          {props.cprice && <span className="product-new-label">New</span>}
        </div>
        <div className="product-content">
          <h3 className="title">
            <Link to="/bookdetails"> {props.name} </Link>
          </h3>
          <div className="price">
            {props.pprice}
            {props.cprice && <span> {props.cprice} </span>}
          </div>
          {props.cprice && (
            <ul class="rating">
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star disable"></li>
              <li className="fa fa-star disable"></li>
            </ul>
          )}
          {props.pprice == "$43.50" && (
            <ul class="rating">
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Shopitem;
