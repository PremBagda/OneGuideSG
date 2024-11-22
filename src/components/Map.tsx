import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import React, { useEffect, useState } from 'react';
import SinglePointMarker from './marker/SinglePointMarker'; // Ensure the correct path
import './Map.scss';
import data from '../temp/fakeData.json';

function ChangeView({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

type HospitalData = {
  latitude: number;
  longitude: number;
  description: string;
  markerIcon: string;
  hyperlink: string;
};

export function Map({
  center,
  location = 'My Location',
}: {
  center: LatLngTuple;
  location?: string;
}) {
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);

  useEffect(() => {
    // Fetch the fakeData.json
    // fetch('/temp/fakeData.json')
    //   .then((response) => response.json())
    //   .then((data) => setHospitals(data))
    //   .catch((error) => console.error('Error loading hospital data:', error));
    setHospitals(data);
  }, []);

  return (
    <div data-component="Map">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
      >
        <ChangeView center={center} zoom={11} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
