import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import './Map.scss';

function ChangeView({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export function Map({
  center,
  location = 'My Location',
}: {
  center: LatLngTuple;
  location?: string;
}) {
  return (
    <div data-component="Map">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        <ChangeView center={center} zoom={12} />
        <TileLayer url="https://www.onemap.gov.sg/maps/tiles/Default_HD/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
