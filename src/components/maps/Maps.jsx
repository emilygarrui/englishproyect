import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./Maps.css";

function Maps() {
  return (
    <div className="map-wrapper">
      <MapContainer 
        center={[25.907783251273163, -80.28219914954504]} 
        zoom={15} 
        scrollWheelZoom={false}
        className="locations-map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.907783251273163, -80.28219914954504]}>
          <Popup className="custom-popup">
            Las Americas Liquor Store
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Maps;