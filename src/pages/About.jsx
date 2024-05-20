// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../components/footer';

const About = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center justify-content-center">
                <h1 className="text-center">Hey! We Are PIPO</h1>
                <h3 className="mb-5 text-center">♡＼(￣▽￣)／♡</h3>
                <h3 className="">About This Project</h3>
                <p class="mt-4">
    This web app was created by two Chilean developers as a project for 4Geeks Academy. Our goal is to provide an easy-to-use tool that helps people find nearby public restrooms.
    <br /><br />
    We aim to make it simple for users to locate restrooms, enhancing hygiene and sanitation in public spaces. We will keep improving our user-friendly interface to allow for fast searches and viewing detailed information.
    <br /><br />
    To improve outdoor experiences and community well-being, we encourage users to contribute by adding new restrooms and sharing testimonials with rankings. This helps keep the map accurate and up-to-date, and builds trust and credibility.
    <br /><br />
    To contribute, just fill out a short form to easily join our project and help us create a supportive community together.
</p>

            </div>
            <Footer />
        </div>


    )
}

export default About;