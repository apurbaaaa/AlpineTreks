import React, { useState } from "react";

export default function Itinerary({ data }) {
    const [activeIndices, setActiveIndices] = useState([0]); // Initialize with the first section active

    const toggleAccordion = (index) => {
        setActiveIndices((prevActiveIndices) => {
            if (index === 0) {
                // Prevent toggling the first section off
                return prevActiveIndices;
            }

            if (prevActiveIndices.includes(index)) {
                // If the index is already active, remove it from the array
                return prevActiveIndices.filter((i) => i !== index);
            } else {
                // If the index is not active, add it to the array
                return [...prevActiveIndices, index];
            }
        });
    };

    return (
        <div className="trip-detail tour_details_boxed" id="itinerary">
            <h2>Itinerary</h2>
            <div className="mt-30">
                <div className="roadmap accordion -roadmap js-accordion">
                    {data.itinerary.map((item, index) => (
                        <div key={index} className={`roadmap__item accordion__item js-accordion-item ${activeIndices.includes(index) ? 'is-active' : ''}`}>
                            <div className="roadmap__iconBig">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="roadmap__wrap">
                                <div className="accordion__button d-flex items-center justify-between" onClick={() => toggleAccordion(index)}>
                                    <div className="roadmap__title">{item.title}</div>
                                </div>
                                <div className={`accordion__content ${activeIndices.includes(index) ? 'is-open' : ''}`}>
                                    <div className="roadmap__content">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
