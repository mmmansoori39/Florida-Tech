import "../style/style.css";
import "../style/bootstrap.min.css";
import Shopitem from "./Shopitem";
import Paggination from "./Paggination";

const arrdata = [
  {
    img: "11_mediumf020.png",
    name: "Welcome To Space",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "10_mediumbca2.png",
    name: "Self-Care",
    pprice: "$43.50",
  },
  {
    img: "14_mediume7ac.png",
    name: "Graphic Design School",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "17_mediumd969.png",
    name: "World News",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "13_mediumb794.png",
    name: "Monsoon",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "15_medium1a90.png",
    name: "Every Thing You Never",
    pprice: "$43.50",
  },
  {
    img: "16_medium4b3e.png",
    name: "Food Poison",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "18_medium650d.png",
    name: "Design",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "19_medium89b0.png",
    name: "Knowledge Maker",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "1_large26df.png",
    name: "Halloween Party",
    pprice: "$43.50",
  },
  {
    img: "2_medium4a4e.png",
    name: "Black Night",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "3_medium197c.png",
    name: "About The First Night",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "4_medium4a4e.png",
    name: "Open The Sky",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "15_medium1a90.png",
    name: "Bo-Ok Handover",
    pprice: "$43.50",
  },
  {
    img: "11_mediumf020.png",
    name: "The Big Book of Science",
    pprice: "$63.50",
    cprice: "$75.00",
  },
  {
    img: "6_medium47ed.png",
    name: "By The Air",
    pprice: "$63.50",
    cprice: "$75.00",
  },
];

function Shop() {
  return (
    <div className="ff">
      <section>
        <div className="container">
          <h1 className="text-lg-center py-4 my-3">SHOP</h1>
          <h6>Showing 1-16 of 48 Results</h6>
          <div className="row">
            {arrdata.map((value) => {
              return <Shopitem img={value.img} name={value.name} pprice={value.pprice} cprice={value.cprice} />;
            })}
          </div>
        </div>
        <Paggination />
      </section>
    </div>
  );
}
export default Shop;
