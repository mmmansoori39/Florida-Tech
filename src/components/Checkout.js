import "../style/style.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div class="row mt-4 d-flex align-items-center">
      <div class="col-sm-6 order-md-2 text-right">
        <Link to='/shop' class="btn btn-success mb-4 btn-lg pl-5 pr-5">
          Checkout
        </Link>
      </div>
      <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
        <Link to='/'style={{"color":"black"}}>
          <i class="fas fa-arrow-left mr-2"></i> Continue Shopping
        </Link>
      </div>
    </div>
  );
}
export default Checkout;
