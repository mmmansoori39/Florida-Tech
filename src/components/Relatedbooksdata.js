import "../style/style.css";
import "../style/bootstrap.min.css";

function Relatedbooksdata(props) {
  return (
    <div class="col-md-3 col-sm-6">
      <div class="product-grid3">
        <div class="product-image3">
          <a href="./book_details.html">
            <img class="pic-1" src={require('../images/Shop/' + props.img)} />
            <img class="pic-2" src={require('../images/Shop/' + props.img)} />
          </a>
          <ul class="social">
            <li>
              <a href="#">
                <i class="fa fa-shopping-bag"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
          {props.new && <span class="product-new-label">{props.new}</span>}
        </div>
        <div class="product-content">
          <h3 class="title">
            <a href="#">{props.name}</a>
          </h3>
          <div class="price">
            {props.pprice}
            <span>{props.cprice}</span>
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
};
export default Relatedbooksdata;
