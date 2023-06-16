import React from "react";
import "../style/style.css";
import "../style/bootstrap.min.css";
import Login from "../components/Login";
import Registeration from "../components/Registeration";

function Loginregisterpage() {
  return (
    <>
      <section>
        <div class="container mb-2 pb-3">
          <h1 class="text-lg-center py-4 my-3">ACCOUNT</h1>
          <div class="row">
            <Login />
            <div class="col-md-2">
              <div class="vl"></div>
            </div>
            <Registeration />
          </div>
        </div>
      </section>
    </>
  );
}
export default Loginregisterpage;
