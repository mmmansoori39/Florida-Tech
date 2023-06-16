import "../style/style.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Dropmenu() {
  const [openicon, setopenicon] = useState(false);
  const [navlist, shownavlist] = useState(false);
  const showlogreg = () => {
    setopenicon((val) => !val);
  };
  return (
    <div className="Navbar dropdiv removedro">
      <ul className="navbar-nav mr-auto hsbc dropdivv">
        <li className="nav-item pr-4">
          <Link className="nav-link iccolor" to="/">
            Home{" "}
          </Link>
        </li>
        <li className="nav-item pr-4 mr-3">
          <Link className="nav-link iccolor" to="/shop">
            Shop
          </Link>
        </li>
        <li className="nav-item pr-4 mr-3">
          <Link className="nav-link iccolor" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item pr-4 mr-3">
          <Link className="nav-link iccolor" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav mr-4">
        <li className="nav-item">
          <form>
            <div className="form-group pt-2 mr-3">
              <input
                type="text"
                className="form-control"
                style={{ borderRadius: 30 }}
                placeholder="Search...."
              />
            </div>
          </form>
        </li>
        <li className="nav-item">
          <a className="nav-link iccolor mr-3 scl" href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link iccolor mr-3 scl" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link iccolor scl" to="/login" role="button">
            <i className="fa-solid fa-user" onClick={showlogreg}></i>
            {openicon && (
              <div className="dropdown-menu lr">
                <Link className="dropdwn-item" to="/login">
                  Login
                </Link>
                <Link className="dropdwn-item" to="/login">
                  Register
                </Link>
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Dropmenu;
