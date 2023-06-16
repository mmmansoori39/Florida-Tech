import "../style/style.css";
import "../style/bootstrap.min.css";
import Main from "../images/Main.jpeg";

function Blog1() {
  return (
    <section className="">
      <h1 className="text-lg-center py-4 my-3">BLOG</h1>
      <div className="container pt-3 mt-3">
        <div className="row">
          <div className="col-md-6">
            <h1>Our Blog</h1>
            <p>
              Lorem ipsum dolor sit amet. Et eveniet voluptatem id adipisci
              impedit ea minima provident sed consequuntur molestias. Ut
              voluptatum voluptatem qui Quis optio sit excepturi consequatur non
              enim quia et internos placeat et omnis laborum sed expedita
              dolorem. Qui voluptatem voluptatibus 33 fugit velit est voluptatem
              quas est pariatur molestiae sit dolorem ipsa. Est aperiam modi ea
              mollitia quam et quis eaque ab adipisci accusamus.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={Main}
              className="vmh"
              style={{ width: "100%", borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog1;