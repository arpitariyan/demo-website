import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    // Default center and zoom level
    const center = [20.2947, 85.8632]; // Latitude and Longitude for London
    const zoom = 13;

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
            {/* Add a tile layer (map tiles) */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add a marker with a popup */}
            <Marker position={center}   >
                
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;