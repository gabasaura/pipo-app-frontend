// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './locationmarker';
//import RoutingPipo from './routingpipo';
import '../stylemap.css';




function PipoMap() {

    const[pipos, setPipos] = useState([])

    const getPipos = () => {
        const url = 'http://127.0.0.1:5000/pipos'
        const options = {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        }
    
        fetch(url, options)
          .then(response => response.json())
          .then(datos => setPipos(datos))
          .catch(error => console.log(error.message))
      }
    
      useEffect(() => {
        getPipos()
      }, [])



    return (
        <MapContainer
            center={[-33.4713463,-70.8633804]}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            {/* <RoutingPipo/> */}
            {pipos.map(pipo => (
                <Marker
                    key={pipo.id}
                    id={pipo.id}
                    position={[pipo.latitude, pipo.longitude]}
                ><Popup> <b>{pipo.pipo_name}</b> <br/> <br/> {pipo.address} <br/>
                
                </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default PipoMap