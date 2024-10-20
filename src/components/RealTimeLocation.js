import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for missing marker icons in Leaflet
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const RealTimeLocation = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position

  // Get user's real-time location
  useEffect(() => {
    const geoSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
    };

    const geoError = (error) => {
      console.error('Error fetching location:', error);
    };

    const watcher = navigator.geolocation.watchPosition(geoSuccess, geoError);

    // Cleanup on unmount
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default RealTimeLocation;
