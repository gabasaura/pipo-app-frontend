import React, { useEffect, useState, } from 'react';

const MiniMap = ({location, setLocation}) => {
    
// useEffect(()=> {
//     getLocation()
// }, [])
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    console.log(location)
                },
                error => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            alert("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            alert("An unknown error occurred.");
                            break;
                        default:
                            alert("An unknown error occurred.");
                    }
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    return (
        <div>
            <div className='btn btn-outline-info rounded mt-3 mb-3'  onClick={getLocation}>Click to get location</div>
            {location && (
                <div>
                    
                </div>
            )}
        </div>
    );
}

export default MiniMap;
