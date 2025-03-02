import React from "react";
import "./privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Política de Privacidad y Cookies</h1>

      <section>
        <p>
          En <strong>Golden Dram</strong>, respetamos tu privacidad y estamos
          comprometidos con la protección de los datos personales que nos
          proporcionas a través de nuestra tienda online de licores. Esta
          política de privacidad describe cómo recogemos, utilizamos y
          compartimos tus datos personales, así como el uso de cookies en
          nuestro sitio web.
        </p>
        <p>
          Cumplimos con el Reglamento General de Protección de Datos (RGPD) y
          la Ley Orgánica de Protección de Datos y Garantía de Derechos
          Digitales (LOPDGDD).
        </p>
      </section>

      <section>
        <h2>1. Responsable del Tratamiento de Datos</h2>
        <p>
          <strong>Responsable:</strong> Emily García Ruiz <br />
          <strong>Domicilio:</strong> C/ El Rincón <br />
          <strong>Correo electrónico:</strong> info@goldendram.es <br />
          <strong>Teléfono:</strong> 666 666 666
        </p>
      </section>

      <section>
        <h2>2. Datos que Recopilamos</h2>
        <h3>a) Datos proporcionados directamente por los usuarios</h3>
        <p>
          Información de registro y cuenta: Nombre, apellidos, correo
          electrónico, dirección postal, número de teléfono, datos de
          facturación y de envío.
        </p>
        <p>
          Datos de pago: Información gestionada directamente por proveedores de
          pago seguros, sin almacenamiento en nuestros servidores.
        </p>

        <h3>b) Datos recopilados automáticamente</h3>
        <p>
          Datos de navegación: Dirección IP, tipo de navegador, sistema
          operativo, páginas vistas y duración de la visita.
        </p>
        <p>
          Cookies: Ver la sección específica sobre el uso de cookies más
          adelante.
        </p>
      </section>

      <section>
        <h2>3. Finalidad del Tratamiento de Datos</h2>
        <ul>
          <li>Gestión de pedidos y envíos.</li>
          <li>Comunicaciones sobre pedidos y servicios.</li>
          <li>Marketing y envío de promociones (previo consentimiento).</li>
          <li>Mejora de servicios y experiencia de usuario.</li>
          <li>Cumplimiento de obligaciones legales y fiscales.</li>
        </ul>
      </section>

      <section>
        <h2>4. Seguridad de tus Datos</h2>
        <p>
          Implementamos medidas técnicas y organizativas para proteger los
          datos personales frente a accesos no autorizados, pérdidas o
          alteraciones. Utilizamos certificados SSL y servidores seguros.
        </p>
      </section>

      <section>
        <h2>5. Tus Derechos</h2>
        <p>
          Tienes derecho a acceder, rectificar, eliminar, oponerte y solicitar
          la portabilidad de tus datos. Para ejercer estos derechos, contáctanos
          en <strong>info@goldendram.es</strong>.
        </p>
      </section>

      <section>
        <h2>6. Política de Cookies</h2>
        <p>
          Utilizamos cookies para mejorar la experiencia del usuario y analizar
          el tráfico. Puedes gestionar o desactivar las cookies en la
          configuración de tu navegador.
        </p>
      </section>

      <section>
        <h2>7. Cambios en la Política de Privacidad</h2>
        <p>
          <strong>Golden Dram</strong> se reserva el derecho a modificar esta
          política de privacidad y cookies para adaptarse a cambios legislativos
          o mejoras en nuestros servicios.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

