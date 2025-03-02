import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./Maps.css";

function Maps() {
  // const position = [28.12804,-15.451524];
  return (
    <>
      <MapContainer className="locations-map-container" center={[25.907783251273163, -80.28219914954504]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.907783251273163, -80.28219914954504]}>
          <Popup>
            Las Americas Liquor Store
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Maps