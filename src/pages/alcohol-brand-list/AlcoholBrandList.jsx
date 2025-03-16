import React from "react";
import whiskyBrands from "../../services/AlcoholBrandList";
import "./AlcoholBrandList.css";

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