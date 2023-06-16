import "../style/style.css";
import "../style/bootstrap.min.css";

function Homemember(){
    return(
        <section className="my-4 py-4">
        <div className="container my-4 py-4">
            <div className="row">
              <div className="col-md-5">
                  <img src="https://img.freepik.com/free-vector/illustation-handshake_53876-15714.jpg?w=360" style={{"height":"100%", "width": "100%", "borderRadius": "10px" }} className="vmh"/>
              </div>
              <div className="col-md-7 mt-4 pt-4">
                  <h1 className="mt-4 pt-4">Become a member</h1>
                  <p>We collaborate with industry-leading partners to extend our capabilities with best-in-class solutions for growing their business with quality apps, great support, and unmatched value.</p>
                  <a href="./Contact.html" className="btn btn-info icon-btn">Join the Program</a>    
                </div>
            </div>
        </div>
        </section>
    )
};
export default Homemember;