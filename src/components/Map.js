import "../style/style.css";
import "../style/bootstrap.min.css";

function Map() {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.6834397117545!2d-80.62521068493011!3d28.064688782645106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de1204fc52a6f7%3A0x37ba57635d6a3f15!2sFlorida%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1674417161685!5m2!1sen!2sus"
        style={{ border: "0px", width: "100%", height: "450px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
export default Map;
