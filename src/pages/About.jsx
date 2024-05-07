// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4">About This Project</h2>
                    <p>
                        This web app was developed by two Chilean developers as a project for 4Geeks Academy. 
                        Our goal was to create a user-friendly application that helps people find nearby public toilet locations easily.
                    </p>
                    <p>
                        The project utilizes modern web technologies, including React for the frontend development 
                        and various APIs for mapping and location services.
                    </p>
                    <p>
                        We hope that this app serves as a helpful tool for users to locate public toilets 
                        conveniently and contributes to improving public hygiene and sanitation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;