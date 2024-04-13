import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import locationIcon from "../../assets/logos/location.png";

const MapLeaflet = () => {
  const position = [40.7549, -73.984];
  const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [60, 60],
  });

  return (
    <MapContainer
      className="h-[70vh] z-10 rounded-lg"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon} >
        <Popup>
          127 Midtown Manhattan, <br /> New York
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeaflet;
