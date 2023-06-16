import "../style/style.css";
import "../style/bootstrap.min.css";

function Contactus(){
    return(
        <section>
<div className="container">
  <h1 className="text-lg-center py-4 my-3">CONTACT US</h1>
    <div className="row"> 
        <div className="col-md-5">
            
            <p>This is the contact page for the book store.</p>
            <p>Get in Touch!</p>
            <form>
              <div className="form-group">
                <label for="getintouch">Name</label>
                <input type="Name" className="form-control" id="Name" placeholder="Name"/>
                
              </div>
              <div className="form-group">
                <label for="getintouch">Email</label>
                <input type="Email" className="form-control" id="Email" placeholder="xyz@gmail.com"/>
              
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
                </div>
                <button type="submit" className="btn btn-info" value="Submit">Submit</button>
              </form>
              </div>
        <div className="col-md-7">
            <img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="vmh" style={{"width": "100%", "borderRadius":"10px"}}/> 
        </div>
      </div>
    </div>
  </section>
    )
}
export default Contactus;