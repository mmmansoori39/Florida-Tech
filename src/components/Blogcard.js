import "../style/style.css";
import "../style/bootstrap.min.css";
import Blogcarddata from "./Blogcarddata";

const arrdata=[
    {
        img:"vision.jpg",
        name:"VISION"
    },
    {
        img:"mission.jpeg",
        name:"MISSION"
    },
    {
        img:"history.jpeg",
        name:"HISTORY"
    }
]

function Blogcard() {
  return (
    <section className="pt-4 mt-4">
      <div className="container my-4 py-4">
        <div className="card-deck ">
          {
            arrdata.map((value)=>{
                return(
                    <Blogcarddata img={value.img} name={value.name} />
                )
            })
          }
        </div>
      </div>
    </section>
  );
}
export default Blogcard;