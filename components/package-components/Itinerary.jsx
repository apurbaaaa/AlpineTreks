import React, { useState } from "react";

export default function Itinerary({ data }) {
    const [activeIndex, setActiveIndex] = useState(null); // State to track active item index

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
            
    };

    return (
        <div className="trip-detail tour_details_boxed" id="itinerary">
            <h2>Itinerary</h2>
            <div className="mt-30">
                <div className="roadmap accordion -roadmap js-accordion">
                    {data.itinerary.map((item, index) => (
                        <div key={index} className={`roadmap__item accordion__item js-accordion-item ${activeIndex === index ? 'is-active' : ''}`}>
                            <div className="roadmap__iconBig">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="roadmap__wrap">
                                <div className="accordion__button d-flex items-center justify-between" onClick={() => toggleAccordion(index)}>
                                    <div className="roadmap__title">{item.title}</div>
                                </div>
                                <div className={`accordion__content ${activeIndex === index ? 'is-open' : ''}`}>
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
