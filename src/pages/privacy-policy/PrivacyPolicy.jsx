import React from "react";
import "./privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <section>
        <p>
          At <strong>Golden Dram</strong>, we respect your privacy and are fully committed 
          to protecting the personal data you provide through our online liquor store. This privacy policy outlines how we collect, use, and share your personal information, as well as how we use cookies on our website.
        </p>
        <p>
          We comply with the General Data Protection Regulation (GDPR) and the Spanish Organic Law on Data Protection and Guarantee of Digital Rights (LOPDGDD).
        </p>
      </section>

      <section>
        <h2>1. Data Controller</h2>
        <p>
          <strong>Controller:</strong> Emily García Ruiz <br />
          <strong>Address:</strong> C/ El Rincón <br />
          <strong>Email:</strong> info@goldendram.es <br />
          <strong>Phone:</strong> 666 666 666
        </p>
      </section>

      <section>
        <h2>2. Data We Collect</h2>
        <h3>a) Data provided directly by users</h3>
        <p>
         Account and registration information: First and last name, email address, postal address, phone number, billing and shipping details.
        </p>
        <p>
          Payment information: Managed directly by secure payment providers; we do not store this information on our servers.
        </p>

        <h3>b) Data collected automatically</h3>
        <p>
          Browsing data: IP address, browser type, operating system, pages visited, and duration of visit.
        </p>
        <p>
          Cookies: Please refer to the specific cookies section below.
        </p>
      </section>

      <section>
        <h2>3. Purpose of Data Processing</h2>
        <ul>
          <li>Order and shipping management.</li>
          <li>Communication regarding orders and services.</li>
          <li>Marketing and promotional communications (with prior consent).</li>
          <li>Service improvement and user experience enhancement.</li>
          <li>Compliance with legal and tax obligations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement technical and organizational measures to safeguard personal data against unauthorized access, loss, or alteration. Our website uses SSL certificates and secure servers.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, rectify, delete, object to, and request portability of your data. To exercise these rights, please contact us at: <strong>info@goldendram.es</strong>.
        </p>
      </section>

      <section>
        <h2>6. Cookie Policy</h2>
        <p>
          We use cookies to enhance user experience and analyze website traffic. You can manage or disable cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>7. Changes to the Privacy and Cookie Policy</h2>
        <p>
          <strong>Golden Dram</strong> reserves the right to modify this privacy and cookie policy to reflect legal updates or improvements to our services.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;