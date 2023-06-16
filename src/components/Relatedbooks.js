import "../style/style.css";
import "../style/bootstrap.min.css";
import Relatedbooksdata from "./Relatedbooksdata";

const arrdata=[
    {
        img:"8_medium2f4a.png",
        name:"Stay Healthy",
        pprice:"$63.50",
        cprice:"$75.00",
        new:"New"
    },
    {
        img:"10_mediumbca2.png",
        name:"Self Care",
        pprice:"$43.50",
    },
    {
        img:"14_mediume7ac.png",
        name:"Graphic Design School",
        pprice:"$63.50",
        cprice:"$75.00",
        new:"New"
    },
    {
        img:"17_mediumd969.png",
        name:"World News",
        pprice:"$63.50",
        cprice:"$75.00",
        new:"New"
    },
]

function Relatedbooks() {
  return (
    <section>
      <div class="container py-4 my-4">
        <h2 class="text-lg-center">Related Books</h2>
        <p class="text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random.
        </p>

        <div class="row">
          {
            arrdata.map((value)=>{
                return(
                    <Relatedbooksdata img={value.img} name={value.name} pprice={value.pprice} cprice={value.cprice} new={value.new} />
                )
            })
          }
        </div>
      </div>
    </section>
  );
};
export default Relatedbooks;
