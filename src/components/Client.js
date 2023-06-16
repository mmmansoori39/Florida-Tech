import "../style/style.css";
import "../style/bootstrap.min.css";
import Clientimg from "./Clientimg";

const arrImg = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

function Client() {
  return (
    <section className="my-4 py-4">
      <h2 className="text-md-center my-4">CLIENTS</h2>
      <div className="container my-4">
        <div className="row">
          {arrImg.map((img) => {
            return <Clientimg img={img} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default Client;
