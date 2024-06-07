"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FAQ() {
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [openIndex, setOpenStreet] = useState(null);  // State to track the open accordion item

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://mountaintrekkingnepal.com/api/settings");
                setDatas(response?.data?.traveller_faq);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError("Failed to fetch data. Please try again later.");
            }
        };
        fetchData();
    }, []);

    const toggleAccordion = (index) => {
        console.log("Hello")
        setOpenStreet(openIndex === index ? null : index);
    };

    return (
        <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
                <div className="row y-gap-10 justify-center items-end">
                    <div className="col-10 text-center">
                        <h2 className="text-30 md:text-24">Frequently Asked Questions by Travelers</h2>
                        <p>Join us on our trending adventure this year.</p>
                    </div>
                </div>
                {error && <p className="text-error">{error}</p>}
                {datas.map((data, i) => (
                    <div key={i} className="accordion -simple row y-gap-20 mt-30 js-accordion justify-content-center">
                        <div className="col-lg-8 col-12">
                            <div className="accordion__item px-20 py-15 border-1 rounded-12">
                                <div 
                                    className="accordion__button d-flex items-center justify-between" 
                                    onClick={() => toggleAccordion(i)}
                                    aria-expanded={openIndex === i}
                                    aria-controls={`faq-answer-${i}`}
                                >
                                    <div className="button text-16 text-dark-1">{data.question}</div>
                                    <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                                        <i className={`icon-${openIndex === i ? 'minus' : 'plus'} text-13`}></i>
                                    </div>
                                </div>
                                {openIndex === i && (
                                    <div className="accordion__content" id={`faq-answer-${i}`}>
                                        <div className="pt-20">
                                            <p>{data.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
