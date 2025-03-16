import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";
import "./WhiskyList.css";

function WhiskyList() {
  const [whiskies, setWhiskies] = useState([]);
  const [filteredWhiskies, setFilteredWhiskies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const whiskyListRef = ref(database, "whiskyList");


    onValue(whiskyListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const whiskiesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setWhiskies(whiskiesArray);
        setFilteredWhiskies(whiskiesArray);

        const uniqueCategories = [...new Set(whiskiesArray.map((whisky) => whisky.categoria))];
        setCategories(uniqueCategories);
      }
    });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === "") {
      setFilteredWhiskies(whiskies);
    } else {
      const filtered = whiskies.filter((whisky) => whisky.categoria === category);
      setFilteredWhiskies(filtered);
    }
  };

  return (
    <div className="whisky-list">
      <h1>Lista de Whiskies</h1>
      <p>Explora nuestra selección de whiskies y filtra por categoría.</p>

      <div className="category-filter">
        <label htmlFor="category">Filtrar por categoría:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="whisky-grid">
        {filteredWhiskies.map((whisky) => (
          <div key={whisky.id} className="whisky-card">
            <h3>{whisky.nombre}</h3>
            <p>{whisky.descripcion}</p>
            <p><strong>Categoría:</strong> {whisky.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhiskyList;