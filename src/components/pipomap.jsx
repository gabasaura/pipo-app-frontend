// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './locationmarker';
//import RoutingPipo from './routingpipo';
import '../stylemap.css';




function PipoMap() {
    const pipoMarker01 = [-33.436262,-70.6467955]
    const pipoMarker02 = [-33.435472,-70.6516096]
    const pipoMarker03 = [-33.4081137,-70.7199572]
    const pipoMarker04 = [-33.3660915,-70.7300094]
    const pipoMarker05 = [-33.408993,-70.545222]
    const pipoMarker06 = [-33.60955,-70.57591]
    const pipoMarker07 = [-33.3962267,-70.6067649]
    const pipoMarker08 = [-33.4108529,-70.6247847]
    const pipoMarker09 = [-33.1834619,-70.5990436]

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
            <Marker position={pipoMarker01}>
                <Popup>Bellas Artes</Popup>
            </Marker>
            <Marker position={pipoMarker02}>
                <Popup>GAM</Popup>
            </Marker>
            <Marker position={pipoMarker03}>
                <Popup>METRO Baquedano</Popup>
            </Marker>
            <Marker position={pipoMarker04}>
                <Popup>METRO Quilicura</Popup>
            </Marker>
            <Marker position={pipoMarker05}>
                <Popup>METRO Puente Alto</Popup>
            </Marker>
            <Marker position={pipoMarker06}>
                <Popup>Parque MET</Popup>
            </Marker>
            <Marker position={pipoMarker07}>
                <Popup></Popup>
            </Marker>
            <Marker position={pipoMarker08}>
                <Popup>Parque Aguas de Ramón</Popup>
            </Marker>
            <Marker position={pipoMarker09}>
                <Popup>Baños de Colina</Popup>
            </Marker>
        </MapContainer>
    );
}

export default PipoMap