import "../style/style.css";
import "../style/bootstrap.min.css";
import Logo from "../images/Logo.png";
import Payment from "../images/payment.png";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-2">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt="logo" style={{ width: 160 }} />
          </div>
          <div className="col-md-6 pt-4">
            <h5 className="text-dark">@2023Florida Tech Book Store</h5>
          </div>
          <div className="col-md-2 pt-4">
            <img src={Payment} />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
