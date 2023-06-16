import "../style/style.css";
import "../style/bootstrap.min.css";
import Quantity from "./Quantity";

function Bookdetails(){
    return(
        <section>
    <h1 className="text-lg-center py-4 my-3">BOOK DETAILS</h1>
<div className="container">
    <div className="row">
        <div className="col-md-5">
            <img src={require('../images/Shop/11_mediumf020.png')} style={{"width": "100%"}} className="bookpro"/>
        </div>

        <div className="col-md-7">
            <h3>Welcome to Space</h3>
            <p>Author: Vamsi</p>
            <p>Edition: 9<sup>th</sup></p>
            <p>Year: 1995</p>
            <p className="text-danger">Price: $70</p>
            <p>SKU: 1098</p>
            <p> Ldolor sit amet. Et eveniet voluptatem id adipisci impedit ea minima provident sed consequuntur molestias. Ut voluptatum voluptatem qui Quis optio sit excepturi consequatur non enim quia et internos placeat et omnis laborum sed expedita dolorem. Qui voluptatem voluptatibus 33 fugit velit est voluptatem quas est pariatur molestiae sit dolorem ipsa. Est aperiam modi ea mollitia qu</p>
            <div className="row">
                    <Quantity style={{"width":"40%"}} />
                    <div className="mb-3">
                        <button className="btn btn-dark" type="button">ADD TO CART</button>
                        </div>
            </div>
            
            <button className="btn btn-dark" type="button">BUY NOW</button>
            <p className="mt-4"><b>Categories</b>: New Product, UpSell Product</p>
            <p><b>Tag</b>: gold, grey, magenta, maroon, white</p>
        </div>
       
    </div>
</div>
</section>
    )
};
export default Bookdetails;