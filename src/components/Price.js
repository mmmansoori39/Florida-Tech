import "../style/style.css";
import "../style/bootstrap.min.css";

function Price(props){
    return(
        <td data-th="Price">${props.price}.00</td>
    )
};
export default Price;