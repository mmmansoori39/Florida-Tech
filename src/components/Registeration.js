import "../style/style.css";
import "../style/bootstrap.min.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

function Registeration() {
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    conpassword: "",
  });
//   const navigate = useNavigate();
  const Submitdetails = (e) => {
    e.preventDefault();
    if (
      !values.username ||
      !values.email ||
      !values.password ||
      !values.conpassword
    ) {
      alert("Fill the all input fields");
      return;
    }
    if (values.password != values.conpassword) {
      alert("Password is not matching");
      return;
    }

    createUserWithEmailAndPassword(auth, values.email, values.conpassword)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        // navigate("/");
        alert("Registeration is successfully completed. Please Do login")
      })
      .catch((error) => {
        alert(error)
      });
  };

  return (
    <div className="col-md-5">
      <h4 className="mb-3">Register</h4>
      <form>
        <div className="form-group">
          <label for="formGroupExampleInput">Username</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter your username"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, username: event.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Create Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Create Password"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, password: event.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Confirm-Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Retype-Password"
            onChange={(event) =>
              setvalues((prev) => ({
                ...prev,
                conpassword: event.target.value,
              }))
            }
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={Submitdetails}
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default Registeration;
