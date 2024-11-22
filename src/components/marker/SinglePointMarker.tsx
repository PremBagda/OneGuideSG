import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../marker/SinglePointMarker.module.scss';

type SinglePointMarkerProps = {
  title: string;
  subtitle?: string;
  latitude: number;
  longitude: number;
  ThemeIcon: string;
  imageLink?: string;
  websiteLink?: string;
};

const createIcon = (iconUrl: string): Leaflet.DivIcon =>
  Leaflet.divIcon({
    className: styles.customMarker,
    html: `<div class="${styles.iconStyling}" style="background-image: url('${iconUrl}');"></div>`,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40],
  });

const SinglePointMarker: React.FC<SinglePointMarkerProps> = ({
  title,
  subtitle,
  latitude,
  longitude,
  ThemeIcon,
  websiteLink,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const icon = createIcon(`icons/${ThemeIcon}.png`);

  return (
    <Marker position={[latitude, longitude]} icon={icon}>
      <Popup>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        )}
      </Popup>
    </Marker>
  );
};

export default SinglePointMarker;
