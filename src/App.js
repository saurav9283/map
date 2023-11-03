import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import locationImage from "./location.png";

const center = [22.3511148, 78.6677428]; // Coordinates for the center of India

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    }
  }, []);

  const customIcon = new Icon({
    iconUrl: locationImage,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer center={currentLocation || center} zoom={currentLocation ? 13 : 5} style={{ width: "100vw", height: "100vh" }}>
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

      {currentLocation && (
        <Marker position={currentLocation} icon={customIcon}>
          <Popup>
            Current Location
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default App;
