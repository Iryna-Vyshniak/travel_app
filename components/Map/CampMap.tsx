'use client';

import React, { useState, useEffect } from 'react';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { attribution, url } from '@/constants';

type MapProps = {
  position: [number, number];
  address: string;
};

const greenIcon = L.icon({
  iconUrl: '/images/leaf-green.png',
  shadowUrl: '/images/leaf-shadow.png',

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const CampMap: React.FC<MapProps> = ({ position, address }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (typeof window === 'undefined' || !mapLoaded) {
    return <div>Loading map...</div>;
  }

  const mapCenter: LatLngExpression = position;

  return (
    <div className='relative mt-6 w-full z-10 h-[400px] overflow-hidden border-2 border-green-80 shadow-lg shadow-green-90'>
      <MapContainer
        center={mapCenter}
        zoom={10}
        scrollWheelZoom={false}
        style={{ width: '100%', height: 400 }}
      >
        <TileLayer attribution={attribution} url={url} />
        <Marker position={position} icon={greenIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CampMap;
