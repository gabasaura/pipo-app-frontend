import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';



function LocationMarker({key, id, free, babychanger, toiletpaper, disabled}, address) {
    const [position, setPosition] = useState(null);
    
    useMapEvents({
        locationfound(e) {
            setPosition(e.latlng);
        },
    });

    return position ? (
        <Marker position={position} key={key} id={id} free={free} babychanger={babychanger} toiletpaper={toiletpaper} disabled={disabled} >
            <Popup>
            </Popup>
            
        </Marker>
    ) : null;
}

export default LocationMarker;