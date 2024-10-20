import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Fix missing marker icons issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Predefined routes between different cities
const routes = [
  {
    start: [19.076, 72.8777], // Mumbai
    end: [18.5204, 73.8567],  // Pune
    waypoints: [
      [19.076, 72.8777], [18.932, 73.096], [18.75, 73.406], [18.645, 73.766], [18.5204, 73.8567]
    ],
  },
  {
    start: [19.076, 72.8777], // Mumbai
    end: [28.7041, 77.1025],  // Delhi
    waypoints: [
      [19.076, 72.8777], [21.1458, 79.0882], [23.2599, 77.4126], [28.7041, 77.1025]
    ],
  },
  {
    start: [13.0827, 80.2707], // Chennai
    end: [12.9716, 77.5946],   // Bangalore
    waypoints: [
      [13.0827, 80.2707], [12.7351, 78.6356], [12.9716, 77.5946]
    ],
  },
];

const RealTimeRouteMap = () => {
  const [routeIndex, setRouteIndex] = useState(0); // Current route index
  const [currentRoute, setCurrentRoute] = useState(routes[0]); // Initial route

  useEffect(() => {
    // Update the route whenever the index changes
    setCurrentRoute(routes[routeIndex]);
  }, [routeIndex]);

  // Function to go to the next route
  const nextRoute = () => {
    setRouteIndex((prevIndex) => (prevIndex + 1) % routes.length);
  };

  return (
    <div className="w-full h-screen">
      <MapContainer center={currentRoute.start} zoom={6} style={{ height: '90%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={currentRoute.start}>
          <Popup>Start: {JSON.stringify(currentRoute.start)}</Popup>
        </Marker>
        <Marker position={currentRoute.end}>
          <Popup>End: {JSON.stringify(currentRoute.end)}</Popup>
        </Marker>
        <Polyline positions={currentRoute.waypoints} color="blue" />
      </MapContainer>

      <div className="text-center mt-2">
        <button
          onClick={nextRoute}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next Route
        </button>
      </div>
    </div>
  );
};

export default RealTimeRouteMap;
