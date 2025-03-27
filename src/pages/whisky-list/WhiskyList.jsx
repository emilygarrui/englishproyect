import React, { useEffect, useState } from "react";
import { ref, onValue, push, update, remove } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";
import "./WhiskyList.css";

function WhiskyList() {
  const [whiskies, setWhiskies] = useState([]);
  const [filteredWhiskies, setFilteredWhiskies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    categoria: ""
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const whiskyListRef = ref(database, "whiskyList");
    const unsubscribe = onValue(whiskyListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const whiskiesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setWhiskies(whiskiesArray);
        setFilteredWhiskies(whiskiesArray);
        updateCategories(whiskiesArray);
      }
    });
    return () => unsubscribe();
  }, []);

  const updateCategories = (whiskiesArray) => {
    const uniqueCategories = [...new Set(whiskiesArray.map((whisky) => whisky.categoria))];
    setCategories(uniqueCategories);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFilteredWhiskies(
      category === "" ? whiskies : whiskies.filter((whisky) => whisky.categoria === category)
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addWhisky = () => {
    if (!formData.nombre || !formData.categoria) return;
    
    const whiskyListRef = ref(database, "whiskyList");
    push(whiskyListRef, formData).then(() => {
      setFormData({ nombre: "", descripcion: "", categoria: "" });
    });
  };

  const editWhisky = (whisky) => {
    setFormData({
      nombre: whisky.nombre,
      descripcion: whisky.descripcion,
      categoria: whisky.categoria
    });
    setEditingId(whisky.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateWhisky = () => {
    if (!formData.nombre || !formData.categoria) return;
    
    const whiskyRef = ref(database, `whiskyList/${editingId}`);
    update(whiskyRef, formData).then(() => {
      setFormData({ nombre: "", descripcion: "", categoria: "" });
      setEditingId(null);
    });
  };

  const deleteWhisky = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este whisky?")) {
      const whiskyRef = ref(database, `whiskyList/${id}`);
      remove(whiskyRef);
    }
  };

  return (
    <div className="whisky-list">
      <h1>Dinos cuál es tu favorito</h1>
      <p>Comparte tu whisky favorito con la comunidad</p>

      <div className="whisky-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del whisky"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría (ej: Escocés, Bourbon)"
          value={formData.categoria}
          onChange={handleInputChange}
          required
        />
        {editingId ? (
          <button onClick={updateWhisky}>Actualizar Whisky</button>
        ) : (
          <button onClick={addWhisky}>Añadir Whisky</button>
        )}
      </div>

      <div className="category-filter">
        <label htmlFor="category">Filtrar por categoría:</label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={handleCategoryChange}
        >
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
            <div className="whisky-content">
              <h3>{whisky.nombre}</h3>
              <p>{whisky.descripcion}</p>
              <p><strong>Categoría:</strong> {whisky.categoria}</p>
              <div className="whisky-actions">
                <button onClick={() => editWhisky(whisky)}>Editar</button>
                <button onClick={() => deleteWhisky(whisky.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhiskyList;