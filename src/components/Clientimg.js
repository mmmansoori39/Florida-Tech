import "../style/style.css";
import "../style/bootstrap.min.css";

function Clientimg(props){
    return(
        <div className="col-md-2">
                <img src={require('../images/' + props.img)} style={{"width": "100%"}}/>
            </div>
    )
}
export default Clientimg