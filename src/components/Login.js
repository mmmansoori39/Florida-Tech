import "../style/style.css";
import "../style/bootstrap.min.css";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../context/auth-context";

function Login() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const Submitdetails = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      alert("Fill the all input fields");
      return;
    }

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async () => {
        navigate("/logout");
        localStorage.setItem('logtype', JSON.stringify(true))
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="col-md-5">
      <h4 className="mb-3">Login</h4>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(event) => {
              setvalues((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) => {
              setvalues((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={Submitdetails}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
