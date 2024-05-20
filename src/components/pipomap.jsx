import React, { useState, useEffect, useContext } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './locationmarker';
import L from 'leaflet';
import marker from '../assets/pipo-marker.svg';
import { FaToiletPaper, } from "react-icons/fa6";
import { MdAccessible, MdAttachMoney, MdBabyChangingStation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import '../stylemap.css';
import Comments from './Comments';
import LeaveComment from './LeaveComment';
import StarRating from './Ranking';
import { Context } from '../store/AppContext';
import CreateAccount from './CreateAccount';
import { toast } from "react-toastify";
import Calificar from './calificar';



function PipoMap() {
	const [pipos, setPipos] = useState([]);
	const [selectedPipo, setSelectedPipo] = useState(null);
	const [userComment, setUserComment] = useState("")
	const { store, actions } = useContext(Context)

	//custom marker here 
	const pipoIcon = new L.Icon({
		iconUrl: marker,
		iconRetinaUrl: marker,
		popupAnchor: [-0, -0],
		iconSize: [35, 45],
	});

	const handlePipoClick = (pipo) => {
		setSelectedPipo(pipo);
	}


	const handleCommentChange = (e) => {
		setUserComment(e.target.value);
	}

	const handleSubmitComment = (e, id) => {
		e.preventDefault();
		{
			const { access_token } = store
			const url = `http://127.0.0.1:5000/pipo/${id}/comment`;
			const options = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + access_token
				},
				body: JSON.stringify({
					comment: userComment
				})
			};

			fetch(url, options)
				.then(response => response.json())
				.then(data => {
					console.log('Comentario enviado con éxito', data);
					if (data.msg) { toast.error(data.msg) }
					else toast.success(data.success)
				})
				.catch(error => console.error('Error al Comentar:', error));

			;
		}
		actions.getPipos()
		setUserComment("")
	}


	useEffect(() => {
		actions.getPipos();
	}, []);

	return (
		<MapContainer
			center={[-33.4713463, -70.8633804]}
			zoom={11}
			scrollWheelZoom={true}
			style={{ height: "100vh", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker />
			{store.pipos.filter(pipo => pipo.active).map(pipo => (
				<Marker
					icon={pipoIcon}
					key={pipo.id}
					id={pipo.id}
					position={[pipo.latitude, pipo.longitude]}
				>
					<Popup>
						<p><b>{pipo.pipo_name}</b></p>
						<p>{pipo.address}</p>
						<h6><StarRating rating={pipo.stars} /></h6>
						<br />
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
						<p><a href={`#modal-${pipo.id}`} className="btn btn-outline-info w-100 more-info-btn" data-bs-toggle="modal" data-bs-target={`#modal-${pipo.id}`} >More Info</a></p>

					</Popup>

					<div className="modal fade" id={`modal-${pipo.id}`} tabIndex="-1" aria-labelledby={`modal-${pipo.id}-label`} aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content rounded-0 border-0">
								<div className="modal-header border-0 border-bottom border-1 border-black">
									<h5 className="modal-title" id={`modal-${pipo.id}-label`}>{pipo.pipo_name} <FaLocationDot /></h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<h6 className='py-3'>{pipo.address}</h6>
									<h6><StarRating rating={pipo.stars} /></h6>
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
									<p data-bs-toggle="modal" data-bs-target={`#modal-${pipo.id}`}></p>
									<hr className="border-top border-info border-2 opacity-100 pb-2" />

									<h5>Community Reviews</h5>
									<table className="table table-bordered border-primary">

									{pipo.comments.map(comentario =>
										<Comments
											key={comentario.id}
											id={comentario.id}
											username={comentario.user}
											date={comentario.date}
											comment={comentario.comments}
											rating={pipo.ratings.find(rating => rating.user_id == comentario.user_id)}

										/>
									)}
									</table>

									


								</div>
								<div className="modal-content rounded-0 border-0 border-top border-1 border-black d-flex justify-content-center">
									{/* <button type="submit" className="btn btn-outline-info" onSubmit={handleSubmitComment}>Submit</button> */}
									{store.access_token ? <><Calificar
										onRatingChange={(rating) => actions.sendRating(rating, pipo.id)}
									/>
										<LeaveComment id={pipo.id} text={userComment} onChange={handleCommentChange} onSubmit={(e) => handleSubmitComment(e, pipo.id)} />
									</> :
										<CreateAccount />
									}
									{/* <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button> */}
								</div>
							</div>
						</div>
					</div>

				</Marker>
			))}
		</MapContainer>
	);
}

export default PipoMap;
