import React, { useState } from 'react';
import Maps from "../../components/maps/Maps";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, hemos recibido tu mensaje. Te responderemos a ${formData.email}`);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>Contact us</h1>
        <p>¿Tienes alguna duda? Escríbenos</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="nombre"
            placeholder="Name"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensaje"
            placeholder="Submit Your Inquiry  "
            value={formData.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="map-container">
        <Maps style={{ background: 'transparent' }} />
      </div>
    </div>
  );
}

export default Contact;