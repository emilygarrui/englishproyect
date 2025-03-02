import "./AlcoholBrandList.css";

const whiskyBrands = [
  { id: 1, nombre: "Macallan", descripcion: "Whisky escocés de alta gama", imagen: "/src/pages/alcohol-brand-list/images/Macallan.jpg" },
  { id: 2, nombre: "Jameson", descripcion: "Whisky irlandés suave y equilibrado", imagen: "/src/pages/alcohol-brand-list/images/Jameson.jpg" },
  { id: 3, nombre: "Glenfiddich", descripcion: "Whisky escocés Single Malt", imagen: "/src/pages/alcohol-brand-list/images/Glenfiddich.jpg" },
  { id: 4, nombre: "Ballantine’s", descripcion: "Un whisky escocés clásico y versátil", imagen: "/src/pages/alcohol-brand-list/images/Ballantines.jpg" },
  { id: 5, nombre: "Lagavulin", descripcion: "Whisky de Islay con un ahumado intenso", imagen: "/src/pages/alcohol-brand-list/images/Lagavulin.jpg" },
  { id: 6, nombre: "Yamazaki", descripcion: "Whisky japonés con notas frutales y elegantes", imagen: "/src/pages/alcohol-brand-list/images/Yamazaki.jpg" },
  { id: 7, nombre: "Bulleit Bourbon", descripcion: "Bourbon con alto contenido de centeno", imagen: "/src/pages/alcohol-brand-list/images/Bulleit.jpg" },
  { id: 8, nombre: "Ardbeg", descripcion: "Whisky escocés con notas ahumadas", imagen: "/src/pages/alcohol-brand-list/images/Ardbeg.jpg" },
  { id: 9, nombre: "Redbreast", descripcion: "Whisky irlandés de alta calidad", imagen: "/src/pages/alcohol-brand-list/images/Redbreast.jpg" },
];

function AlcoholBrandList() {
  return (
    <div className="brand-list">
      <h1>Marcas de Whisky</h1>
      <p>Descubre algunas de las marcas más reconocidas de whisky a nivel mundial.</p>

      <div className="brand-grid">
        {whiskyBrands.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img src={brand.imagen} alt={brand.nombre} />
            <h3>{brand.nombre}</h3>
            <p>{brand.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlcoholBrandList;