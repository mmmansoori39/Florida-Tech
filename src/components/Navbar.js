import { Link, useNavigate } from "react-router-dom";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Logo from "../images/Logo.png";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import Dropmenu from "./Dropmenu";

function Navbar() {
  const [openicon, setopenicon] = useState(false);
  const auth = getAuth();
  const navigate= useNavigate()
  const [show, setshow]= useState(false)

  const googlesignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert("Google login is successfully completed")
        navigate('/logout');
        localStorage.setItem('logtype', JSON.stringify(true))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage)
      });
  };
  const addnav= ()=>{
    setshow(false)
  };
  const addnavv= ()=>{
    setshow(true)
  }

  const showlogreg = () => {
    setopenicon((val) => !val);
  };


  return (
    <>
      <div className="top-header bg-secondary">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <p className="text-white pt-3">
              Talk to our Experts +1 321-367-6767
            </p>
            <div className="d-flex justify-content-end pt-2">
              <a className="nav-link pr-1" href="#">
                <i
                  className="fa-brands fa-google insta"
                  onClick={googlesignin}
                ></i>
              </a>
              <a className="nav-link pr-1" href="#">
                <i className="fa-brands fa-facebook face"></i>
              </a>
              <a className="nav-link pr-1" href="#">
                <i className="fa-brands fa-square-twitter twit"></i>
              </a>
              <a className="nav-link pr-1" href="#">
                <i className="fa-brands fa-linkedin link"></i>
              </a>
              <a className="nav-link pr-1" href="#">
                <i className="fa-brands fa-square-instagram insta"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          <img src={Logo} alt="logo" style={{ width: 160 }} />
        </Link>
        
        {
          show== false && (
            <button
          className="navbar-toggler"
          type="button" 
          onClick={addnavv}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          )
        }
        {
          show== true && (
            <button
          className="navbar-toggler"
          type="button" 
          onClick={addnav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          )
        }
        
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto hsbc">
            <li className="nav-item pr-4">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item pr-4 mr-3">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item pr-4 mr-3">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item pr-4 mr-3">
              <Link className="nav-link" to="/contact">
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
                    id="formGroupExampleInput"
                    placeholder="Search...."
                  />
                </div>
              </form>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3 scl" href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3 scl" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                <span className="count-style bigcounter">1</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link scl" to="/login" role="button">
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
      </nav>
      {show== true && <Dropmenu />}
    </>
  );
}
export default Navbar;
