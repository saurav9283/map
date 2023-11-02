import {MapContainer,TileLayer} from 'react-leaflet'
const center = [30.92242502926363, 75.87046651406249]
function App() {
  return (
    <MapContainer center={center} zoom={10} style={{width:'100vw' , height:'100vh'}}>
    </MapContainer>
  );
}

export default App;
