import { useState } from 'react';
import { Routing } from 'react-leaflet-routing-machine';
import { useMapEvents } from 'react-leaflet';

function RoutingPipo() {
    const [startPosition, setStartPosition] = useState(null);
    const [endPosition, setEndPosition] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const map = useMapEvents({
        click(e) {
            if (!startPosition) {
                setStartPosition(e.latlng);
            } else if (!endPosition) {
                setEndPosition(e.latlng);
            } else {
                setStartPosition(null);
                setEndPosition(null);
            }
        },
        locationfound(e) {
            if (!startPosition) {
                setStartPosition(e.latlng);
            }
        }
    });

    return (
        <>
            {startPosition && endPosition && <Routing waypoints={[startPosition, endPosition]} />}
        </>
    );
}

export default RoutingPipo;