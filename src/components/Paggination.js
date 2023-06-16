import "../style/style.css";
import "../style/bootstrap.min.css";

function Paggination(){
    return(
        <section>
    <div className="container py-4">
        <div className="row">
            <div className="col-md-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link pg" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a class="page-link pg" href="#">1</a></li>
                  <li className="page-item"><a class="page-link pg" href="#">2</a></li>
                  <li className="page-item"><a class="page-link pg" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link pg" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    </div>
</section>
    )
}
export default Paggination;