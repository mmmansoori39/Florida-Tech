import "../style/style.css";
import "../style/bootstrap.min.css";
import Progressdata from "./Progressdata";

const arrData = [
  {
    value: "3000+",
    name: "Member",
  },
  {
    value: "10000+",
    name: "Books",
  },
  {
    value: "1M+",
    name: "Online Reader",
  },
  {
    value: "100+",
    name: "Team",
  },
];

function Progress() {
  return (
    <>
      <h2 className="text-center py-2">Company Progess</h2>
      <section className="bgimg my-4 py-4">
        <div className="container my-4 py-4">
          <div className="row mb-4">
            {arrData.map((data) => {
              return <Progressdata value={data.value} name={data.name} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Progress;
