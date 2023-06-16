import "../style/style.css";
import "../style/bootstrap.min.css";
import Productcart from "./Productcart";
import Quantity from "./Quantity";
import Actioncart from "./Actioncart";
import Price from "./Price";
import Checkout from "./Checkout";

const arrdata = [
  {
    name: "By The Air",
    edition: 6,
    price: 79,
    img: "6_medium47ed.png",
  },
  {
    name: "Every Thing You Never",
    edition: 8,
    price: 89,
    img: "13_mediumb794.png",
  },
  {
    name: "Knowledge Marker",
    edition: 5,
    price: 49,
    img: "18_medium650d.png",
  },
];

function Cartitem() {
  return (
    <section>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h1 className="text-lg-center pt-4 mt-3">Shopping Cart</h1>
              <p className="mb-5 text-center">
                <i className="text-info font-weight-bold">3</i> items in your
                cart
              </p>
              <table
                id="shoppingCart"
                className="table table-condensed table-responsive"
              >
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {arrdata.map((value) => {
                    return (
                      <tr>
                        <td data-th="Product">
                          <Productcart
                            img={value.img}
                            name={value.name}
                            edition={value.edition}
                          />
                        </td>
                        <Price price={value.price} />
                        <td data-th="Quantity">
                          <Quantity />
                        </td>
                        <td class="actions" data-th="">
                          <Actioncart />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>$99.00</h1>
              </div>
            </div>
          </div>
          <Checkout />
        </div>
      </section>
    </section>
  );
}
export default Cartitem;
