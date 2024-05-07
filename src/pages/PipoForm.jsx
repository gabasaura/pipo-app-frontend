// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import StarRating from '../components/Ranking';

const PipoForm = () => {
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
        const newToilet = {
            name: toiletName,
            address: toiletAddress,
            location: { latitude, longitude },
            icons: {
                toiletPaper,
                isDisabledFriendly,
                isFree,
                babyChanger
            },
            rating
        };

        setToilets([...toilets, newToilet]);
        setToiletName("");
        setToiletAddress("");
        setLatitude("");
        setLongitude("");
        setToiletPaper(false);
        setIsDisabledFriendly(false);
        setIsFree(false);
        setBabyChanger(false);
        setRating(0);
        alert("Toilet added successfully.");
    };

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
                        <input type="text" className="form-control" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude:</label>
                        <input type="text" className="form-control" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
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
                        <label htmlFor="rating">Choose a rating</label>
                        <select id="rating" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                            <option value={0}>No rating</option>
                            <option value={1}>1 star</option>
                            <option value={2}>2 stars</option>
                            <option value={3}>3 stars</option>
                            <option value={4}>4 stars</option>
                            <option value={5}>5 stars</option>
                        </select>
                        <StarRating rating={rating} />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </form>
                <h4>Your Added Toilets:</h4>
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
            </div>
        </div>
    </div>
    );
}

export default PipoForm;
