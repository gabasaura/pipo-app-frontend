import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

function LocationMarker() {
    const [position, setPosition] = useState(null);
    
    useMapEvents({
        locationfound(e) {
            setPosition(e.latlng);
        },
    });

    return position ? (
        <Marker position={position}>
            <Popup>YOU ARE HERE</Popup>
        </Marker>
    ) : null;
}

export default LocationMarker;