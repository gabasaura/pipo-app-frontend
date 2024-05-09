import React, { useState, useEffect, useContext } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './locationmarker';
import { FaToiletPaper, } from "react-icons/fa6";
import { MdAccessible, MdAttachMoney, MdBabyChangingStation } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import '../stylemap.css';
import Comments from './Comments';
import LeaveComment from './LeaveComment';
import StarRating from './Ranking';
import { Context } from '../store/AppContext';


function PipoMap() {
	const [pipos, setPipos] = useState([]);
	const [selectedPipo, setSelectedPipo] = useState(null);
	const [userComment, setUserComment] = useState("")
	const { store, actions } = useContext(Context)


	const handlePipoClick = (pipo) => {
		setSelectedPipo(pipo);
	}


	const handleCommentChange = (e) => {
		setUserComment(e.target.value);
	}

	const handleSubmitComment = (e) => {
		e.preventDefault();
        {
            const url = `http://127.0.0.1:5000/pipo/${id}/comment`;
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment,
                    user_id: user_id,
                })
            };
            
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Comentario enviado con éxito', data);
                })
                .catch(error => console.error('Error al Comentar:', error));
            
            ; 
        }

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
					key={pipo.id}
					id={pipo.id}
					position={[pipo.latitude, pipo.longitude]}
				>
					<Popup>
						<p><b>{pipo.pipo_name}</b></p>
						<p>{pipo.address}</p>
						<h6><StarRating rating={pipo.stars}/></h6>
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
						<p><a href={`#modal-${pipo.id}`} className="anchor-link" data-bs-toggle="modal" data-bs-target={`#modal-${pipo.id}`} >See more...</a></p>

					</Popup>

					<div className="modal fade" id={`modal-${pipo.id}`} tabIndex="-1" aria-labelledby={`modal-${pipo.id}-label`} aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id={`modal-${pipo.id}-label`}>{pipo.pipo_name}</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<h6>{pipo.address}</h6>
									<h6><StarRating rating={pipo.stars}/></h6>
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

									<h5>Comments:</h5>
									{pipo.comments.map(comentario =>
										<Comments
											key={comentario.id}
											id={comentario.id}
											username={comentario.user}
											date={comentario.date}
											comment={comentario.comments}
										/>
									)}

									<br />
									<LeaveComment id={`comment-${pipo.id}`} text={userComment} onChange={handleCommentChange}/>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary" onSubmit={handleSubmitComment}>Submit</button>

									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
