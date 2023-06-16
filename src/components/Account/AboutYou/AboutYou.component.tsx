import Footer from "../../../layout/Footer/Footer";
import Header from "../../../layout/Header/Header";

export default function AboutYouComponent() {
  return (
    <>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>About You</h4>
          <div
            className="container w-50 mt-3"
            style={{
              border: "1px solid black",
              height: "500px",
              marginBottom: "90px",
            }}
          >
            <div className="change-email-password text-start">
              <div className="row">
                <h4>Your age</h4>
                <p>19</p>
              </div>
              <div className="row">
                <h4>Your Job</h4>
                <p>Engineer</p>
              </div>
              <div className="row">
                <h4>Your Gender</h4>
                <p>Male</p>
              </div>
              <div className="row">
                <div className="col">
                  <h4>comments for Online Shop:</h4>
                  <p className="text-center" style={{border: "1px solid"}}>
                    ¡Esta aplicación es simplemente increíble! No puedo dejar
                    de usarla. Tiene una interfaz intuitiva y elegante que
                    facilita la navegación y el uso de todas sus funciones. Me
                    encanta cómo está diseñada para adaptarse a mis necesidades
                    y preferencias, brindándome una experiencia personalizada.
                    Además, la variedad de características y herramientas que
                    ofrece es asombrosa. Esta aplicación ha mejorado mi vida de
                    muchas maneras, desde organizar mi día a día hasta
                    mantenerme informado y entretenido. También quiero destacar
                    el excelente soporte al cliente que he recibido. Cualquier
                    duda o problema que he tenido ha sido resuelto rápidamente y
                    con amabilidad. Recomiendo encarecidamente esta aplicación a
                    todos. ¡Es una joya en el mundo digital!
                  </p>
                </div>
              </div>
            </div>
            <div className="change-email-password-button mt-5">
              <button className="btn btn-warning">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </>
  );
}
