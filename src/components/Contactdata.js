import "../style/style.css";
import "../style/bootstrap.min.css";

function Contactdata() {
  return (
    <section>
      <div className="container text-center">
        <div className="row my-4 py-4">
          <div className="col-md-4">
            <div className="card vmh" style={{ borderRadius: 10 }}>
              <div className="card-body">
                <h2>Phone</h2>
                <p>+1 9886666467</p>
                <p></p>
                <p>+1 9876567812</p>
                <p>+1 9876545641</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card vmh" style={{ borderRadius: 10 }}>
              <div className="card-body">
                <h2>Email</h2>
                <p>xyz@gmail.com</p>
                <p>abcgmail.com</p>
                <p>lmn@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card vmh" style={{ borderRadius: 10 }}>
              <div className="card-body">
                <h2>Address</h2>
                <p>Florida Book Shop</p>
                <p>150 W University Blvd Melbourne</p>
                <p>FL-32901</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contactdata;
