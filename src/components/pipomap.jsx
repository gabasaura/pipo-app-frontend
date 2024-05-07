// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './locationmarker';
import { FaToiletPaper, } from "react-icons/fa6";
import { MdAccessible, MdAttachMoney, MdBabyChangingStation } from "react-icons/md";
//import RoutingPipo from './routingpipo';
import '../stylemap.css';




function PipoMap() {

	const [pipos, setPipos] = useState([])

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
			center={[-33.4713463, -70.8633804]}
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
				><Popup> <p><b>{pipo.pipo_name}</b></p>  <p>{pipo.address}</p> <br />
						{!!pipo.disabled &&
							pipo.disabled ?
							<span data-bs-toggle="tooltip" title="Suitable for disabled people" data-bs-placement="top"> <MdAccessible size={24} /> </span> : <span data-bs-toggle="tooltip" title="suitable for disabled" data-bs-placement="top"> <MdAccessible size={24} style={{ color: "#ccc" }} /> </span>}
						{!!pipo.babychanger &&
							pipo.babychanger ?
							<span data-bs-toggle="tooltip" title="Baby Changer" data-bs-placement="top"> <MdBabyChangingStation size={24} /> </span> : <span data-bs-toggle="tooltip" title="Baby Changer" data-bs-placement="top"> <MdBabyChangingStation size={24} style={{ color: "#ccc" }} /> </span>}
						{!!pipo.toiletpaper &&
							pipo.toiletpaper ?
							<span data-bs-toggle="tooltip" title="Toilet Paper" data-bs-placement="top"> <FaToiletPaper size={24} /> </span> : <span data-bs-toggle="tooltip" title="Toilet Paper" data-bs-placement="top"> <FaToiletPaper size={24} style={{ color: "#ccc" }} /> </span>}
						{!!pipo.free &&
							pipo.free ?
							<span data-bs-toggle="tooltip" title="Free" data-bs-placement="top"><MdAttachMoney size={24} style={{ color: "#ccc" }} /> </span> : <span data-bs-toggle="tooltip" title="Paid" data-bs-placement="top"><MdAttachMoney size={24} /> </span>}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}

export default PipoMap