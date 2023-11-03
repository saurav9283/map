import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [28.526563890713174, 77.11413256189118];

function App() {
  return (
    <MapContainer center={center} zoom={3} style={{ width: "100vw", height: "100vh" }}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=qYXBEfnoy4nw81LPAzuv"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Stamen Watercolor">
          <TileLayer
            attribution='&copy; <a href="http://maps.stamen.com/copyright">Stamen Design</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=qYXBEfnoy4nw81LPAzuv"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}

export default App;
