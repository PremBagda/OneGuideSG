import { Marker, Popup, MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import React, { useEffect, useState } from 'react';
import SinglePointMarker from './marker/SinglePointMarker'; // Ensure the correct path
import './Map.scss';
//import data from '../temp/fakeData.json';

function ChangeView({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export type HospitalData = {
  latitude: number;
  longitude: number;
  description: string;
  markerIcon: string;
  hyperlink: string;
};

export function Map({
  center,
  location = 'My Location',
  data
}: {
  center: LatLngTuple;
  location?: string;
    data?: any;
}) {
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);

  useEffect(() => {
    // Fetch the fakeData.json
    // fetch('/temp/fakeData.json')
    //   .then((response) => response.json())
    //   .then((data) => setHospitals(data))
    //   .catch((error) => console.error('Error loading hospital data:', error));
    if (data) {
      console.log("DATA IN MAP TSX", data)
      setHospitals(data); 
    }
  }, [data]);

  return (
    <div data-component="Map">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={true}
        attributionControl={false}
      >
        <ChangeView center={center} zoom={12} />
        <TileLayer url="https://www.onemap.gov.sg/maps/tiles/Default_HD/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>{location}</Popup>
        </Marker>
        {hospitals.map((hospital, index) => (
          <SinglePointMarker
            key={index}
            title={hospital.description}
            subtitle="Hospital"
            latitude={hospital.latitude}
            longitude={hospital.longitude}
            ThemeIcon={hospital.markerIcon}
            websiteLink={hospital.hyperlink}
          />
        ))}
      </MapContainer>
    </div>
  );
}
