import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapLeaflet = () => {

    const position = [40.7549, -73.9840]
    

    return (
        <MapContainer className='h-[70vh] rounded-lg' center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          127 Midtown Manhattan, <br /> New York
          </Popup>
        </Marker>
      </MapContainer>
    );
};

export default MapLeaflet;