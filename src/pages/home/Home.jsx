import { Link } from "react-router-dom";
import "./home.css";

const whiskies = [
  { id: 1, nombre: "Johnnie Walker", descripcion: "Premium Scottish Whisky", imagen: "/home/JohnnieWalker.png" },
  { id: 2, nombre: "Jack Daniel's", descripcion: "Classic American Whisky", imagen: "/home/JackDaniels.jpg" },
  { id: 3, nombre: "Chivas Regal", descripcion: "Smooth and Elegant Scottish Whisky", imagen: "/home/ChivasRegal.jpg" },
  { id: 4, nombre: "Dyc", descripcion: "Smooth and Aromatic Spanish Whisky", imagen: "/home/Dyc.png" },
];

function Home() {
  return (
    <div className="home">
      <section className="banner">
        <h1>GOLDEN DRAM</h1>
      </section>

      <section className="history">
        <h2>A bit of history</h2>
        <div className="history-content">
          <p>
            Whisky, known as the "water of life," originated in Scotland and Ireland, where it was distilled as early as the 15th century. Over time, this spirit transcended borders, giving rise to unique styles such as American bourbon and Japanese whisky.          </p>
          <p>
            Today, whisky is used as a symbol of tradition, craftsmanship, and passion, which is enjoyed worldwide. Each bottle of whisky tells a distinctive story, from the Scottish Highlands to the rivers of Kentucky.
          </p>
        </div>
      </section>

      <section className="whisky-list">
        <h2>Our Suggested Selections</h2>
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
        <Link to="/brand-list" className="btn">View Additional Recognized Brands</Link>
      </div>
    </div>
  );
}

export default Home;