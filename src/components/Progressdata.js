import "../style/style.css";
import "../style/bootstrap.min.css";

function Progressdata(props) {
  return (
    <div className="col-md-3">
      <div className="card m-3 shadow">
        <div className="card-body">
          <h2 className="card-subtitle mb-2 text-muted text-center font-weight-bold">
            {props.value}
          </h2>
          <p className="card-text text-center growthsize">{props.name}</p>
        </div>
      </div>
    </div>
  );
}
export default Progressdata;
