// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../components/footer';

const Faq = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-column flex-grow-1 w-75 mx-auto py-5 align-items-center justify-content-center">
                <h1 className="text-center mb-5">Because we do give faqs (￢‿￢ )	</h1>
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    1. What is the purpose of this app?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    The purpose of this app is to help users easily find nearby public toilet facilities using an interactive map interface.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    2. How do I use the app to find a public toilet?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Simply open the app and allow it to access your location. The map will display your current location along with nearby public toilet facilities marked on the map. You can click on the markers to view more information about each toilet, such as its address and opening hours.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    3. Can i have an account?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Sure you do! You can create your own account in order to enjoy all the fantastic PiPO features.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    4. How to upload a PiPO Location?
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    If you have an account, you will be allow to add new locations for the community, but before you can see it in the map, it must be approved by and administrator, in order to check the information.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    5. Privacy Politics
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                   We have a strong Privacy Policy, this mean that all gathered data from our users  will not be share with any other company, in the same way our users can request the elimination of their account and their data from our servers at any time.
                                </div>
                            </div>
                        </div>
                        {/* Add more accordion items for each FAQ question */}
                    </div>
                </div>
                <Footer />
            </div>
        
    )
}

export default Faq