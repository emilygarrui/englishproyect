import { Link } from "react-router-dom";
import "./home.css";

const whiskies = [
  { id: 1, nombre: "Johnnie Walker", descripcion: "Whisky escocés premium", imagen: "/home/JohnnieWalker.png" },
  { id: 2, nombre: "Jack Daniel's", descripcion: "Whisky americano clásico", imagen: "/home/JackDaniels.jpg" },
  { id: 3, nombre: "Chivas Regal", descripcion: "Whisky escocés suave y elegante", imagen: "/home/ChivasRegal.jpg" },
  { id: 4, nombre: "Dyc", descripcion: "Whisky español suave y aromático", imagen: "/home/Dyc.png" },
];

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <h1>GOLDEN DRAM</h1>
      </section>

      <section className="history">
        <h2>Un poco de historia</h2>
        <div className="history-content">
          <p>
            El whisky, conocido como el <strong>"agua de vida"</strong>, tiene sus raíces en Escocia e Irlanda, donde se destilaba desde el siglo XV. Con el tiempo, esta bebida espirituosa cruzó fronteras, dando origen a estilos únicos como el bourbon estadounidense y el whisky japonés.
          </p>
          <p>
            Hoy, el whisky es un símbolo de tradición, maestría y pasión, disfrutado en todo el mundo. Desde las Highlands escocesas hasta los ríos de Kentucky, cada botella cuenta una historia única.
          </p>
        </div>
      </section>

      <section className="whisky-list">
        <h2>Nuestras Recomendaciones</h2>
        <div className="grid">
          {whiskies.map((whisky) => (
            <div key={whisky.id} className="whisky-card">
              <img src={whisky.imagen} alt={whisky.nombre} />
              <h3>{whisky.nombre}</h3>
              <p>{whisky.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="more-brands">
        <Link to="/brand-list" className="btn">Ver más marcas conocidas</Link>
      </div>
    </div>
  );
}

export default Home;