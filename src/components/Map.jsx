import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Set the initial center of the map
      zoom={13} // Set the initial zoom level
      style={{ height: "400px", width: "100%" }} // Adjust the size of the map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Specify the tile layer source
      />
      <Marker position={[51.505, -0.09]} /> 
    </MapContainer>
  );
};

export default MapView;
