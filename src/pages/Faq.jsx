// eslint-disable-next-line no-unused-vars
import React from 'react';

const Faq = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center my-4">FAQ: Public Toilet Locator</h2>
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
                        {/* Add more accordion items for each FAQ question */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;