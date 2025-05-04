import React from "react";
import whiskyBrands from "../../services/AlcoholBrandList";
import "./AlcoholBrandList.css";

function AlcoholBrandList() {
  return (
    <div className="brand-list">
      <h1>Recognized Brands</h1>
      <p>Explore a selection of the world's most acclaimed whisky brands</p>

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