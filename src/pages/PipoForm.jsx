// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import StarRating from '../components/Ranking';
import MiniMap from '../components/MiniMap';
import { Context } from '../store/AppContext';
import { toast } from "react-toastify";

const PipoForm = () => {

    const { store, actions } = useContext(Context)

    const [location, setLocation] = useState({
        latitude: "",
        longitude: ""
    })

    const [toiletName, setToiletName] = useState("");
    const [toiletAddress, setToiletAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [toiletPaper, setToiletPaper] = useState(false);
    const [isDisabledFriendly, setIsDisabledFriendly] = useState(false);
    const [isFree, setIsFree] = useState(false);
    const [babyChanger, setBabyChanger] = useState(false);
    const [toilets, setToilets] = useState([]);
    const [rating, setRating] = useState(0);



    const handleAddToilet = (event) => {
        event.preventDefault();
        const { access_token } = store
        const url = 'http://127.0.0.1:5000/pipos';
        console.log({
            pipo_name: toiletName,
            address: toiletAddress,
            latitude: location.latitude,
            longitude: location.longitude,
            free: isFree,
            disabled: isDisabledFriendly,
            babychanger: babyChanger,
            toiletpaper: toiletPaper,

        })
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + access_token
            },
            body: JSON.stringify({
                pipo_name: toiletName,
                address: toiletAddress,
                latitude: location.latitude,
                longitude: location.longitude,
                free: isFree,
                disabled: isDisabledFriendly,
                babychanger: babyChanger,
                toiletpaper: toiletPaper,

            })
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('Pipo Registrado Con Éxito', data);
                if (data.msg) toast.error(data.msg)
                    else toast.success(data.success)
            

            })
            .catch(error => console.error('Error al registrar:', error));


        
    };

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log("Position not available");
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h3 className="text-center my-4">Add Toilet</h3>
                    <form onSubmit={handleAddToilet}>
                        <div className="mb-3">
                            <label htmlFor="toiletName" className="form-label">Toilet Name:</label>
                            <input type="text" className="form-control" id="toiletName" value={toiletName} onChange={(e) => setToiletName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="toiletAddress" className="form-label">Toilet Address:</label>
                            <input type="text" className="form-control" id="toiletAddress" value={toiletAddress} onChange={(e) => setToiletAddress(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="latitude" className="form-label">Latitude:</label>
                            <input type="text" className="form-control" id="latitude" value={location.latitude} onChange={(e) => setLatitude(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="longitude" className="form-label">Longitude:</label>
                            <input type="text" className="form-control" id="longitude" value={location.longitude} onChange={(e) => setLongitude(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-check-label">The Toilet:</label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="toiletPaper" checked={toiletPaper} onChange={(e) => setToiletPaper(e.target.checked)} />
                                <label htmlFor="toiletPaper" className="form-check-label">Have Toilet Paper?</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="isDisabledFriendly" checked={isDisabledFriendly} onChange={(e) => setIsDisabledFriendly(e.target.checked)} />
                                <label htmlFor="isDisabledFriendly" className="form-check-label">Is Disabled Friendly?</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="isFree" checked={isFree} onChange={(e) => setIsFree(e.target.checked)} />
                                <label htmlFor="isFree" className="form-check-label">Is It Free?</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="hasBabyChanging" checked={babyChanger} onChange={(e) => setBabyChanger(e.target.checked)} />
                                <label htmlFor="hasBabyChanging" className="form-check-label">Does It Have a Baby Changing?</label>
                            </div>
                            <hr />
                            
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </form>
                    
                    <ul>
                        {toilets.map((toilet, index) => (
                            <li key={index}>
                                {toilet.name} - {toilet.address} - {toilet.location.latitude}, {toilet.location.longitude} - Rating: {toilet.rating}
                                <div>
                                    <span>Toilet Paper: {toilet.icons.toiletPaper ? "True" : "False"}</span> |
                                    <span> Disabled Friendly: {toilet.icons.isDisabledFriendly ? "True" : "False"}</span> |
                                    <span> Free: {toilet.icons.isFree ? "True" : "False"}</span> |
                                    <span> Baby Changing: {toilet.icons.babyChanger ? "True" : "False"}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <MiniMap onClick={getLocation}
                        location={location}
                        setLocation={setLocation}
                    />
                </div>
            </div>
        </div>
    );
}

export default PipoForm;
