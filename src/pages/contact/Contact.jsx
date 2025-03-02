import Maps from "../../components/Maps/Maps";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact">
        <h2>Contacta con nosotros</h2>
        <form>
          <label>Nombre:</label>
          <input type="text" placeholder="Nombre" required />

          <label>Email:</label>
          <input type="email" placeholder="Tu correo electrónico" required />

          <label>Mensaje:</label>
          <textarea placeholder="Escribe tu consulta aquí..." required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
        <Maps />
    </div>
  );
}

export default Contact;