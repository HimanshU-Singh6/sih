import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

// The disaster map component
const DisasterMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // Dummy disaster locations (latitude, longitude, and description)
  const disasterLocations = [
    { id: 1, lat: 28.6139, lng: 77.2090, description: 'Flood in Delhi' },
    { id: 2, lat: 19.0760, lng: 72.8777, description: 'Earthquake in Mumbai' },
    { id: 3, lat: 12.9716, lng: 77.5946, description: 'Cyclone in Bangalore' },
    { id: 3, lat: 15.9716, lng: 80.5946, description: 'Cyclone in Bangalore' },
    { id: 3, lat: 18.9716, lng: 81.9976, description: 'Earthquake in jagdalpur' },
    { id: 3, lat: 25.9716, lng: 72.5946, description: 'Cyclone in Bangalore' },
  ];

  // Function to get mouse position over the map for better popup positioning
  const MapEvents = () => {
    useMapEvents({
      mousemove(e) {
        setPopupPosition({ x: e.containerPoint.x, y: e.containerPoint.y });
      },
    });
    return null;
  };

  return (
    <div className="relative">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Attach events to markers */}
        {disasterLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            eventHandlers={{
              mouseover: () => {
                console.log("Hovered over:", location.description);
                setHoveredLocation({ ...location });
              },
              mouseout: () => {
                console.log("Mouse out:", location.description);
                setHoveredLocation(null);
              },
            }}
          />
        ))}

        {/* Capture mouse movement on map */}
        <MapEvents />
      </MapContainer>

      {/* Custom popup for showing hovered location details */}
      {hoveredLocation && (
        <div
          className="absolute z-50 bg-white p-4 shadow-lg rounded-lg"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`,
            transform: 'translate(-50%, -100%)', // Offset the popup above the cursor
          }}
        >
          <h3 className="text-lg font-semibold">Disaster Details</h3>
          <p>{hoveredLocation.description}</p>
        </div>
      )}
    </div>
  );
};

export default DisasterMap;
