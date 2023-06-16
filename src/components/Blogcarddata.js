import "../style/style.css";
import "../style/bootstrap.min.css";

function Blogcarddata(props){
    return(
        <div className="card vmh" >
          <img src={require('../images/' + props.img)} className="card-img-top" alt="..." style={{"width": "100%", "height": "52%"}}/>
          <div className="card-body">
            <h5 className="card-title text-md-center">{props.name}</h5>
            <p className="card-text">Our mission is to provide quality but affordable books for education, entertainment, self-development and self-fulfillment; to all when the need arises by: Providing a wide range of books to satisfy our clients. Exceeding our customers' expectation in their book requirements.</p>
           
          </div>
        </div>
    )
};
export default Blogcarddata;
