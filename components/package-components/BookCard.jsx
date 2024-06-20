import React, { useEffect, useState } from "react";

export default function BookCard() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="col-lg-4">
            <div
                className="d-flex js-pin-content"
                style={{
                    position: isFixed ? "fixed" : "static",
                    top: isFixed ? "70px" : "auto",
                }}
            >
                <div className="tourSingleSidebar">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex items-center price mobile-none flex-column">
                            <div className="fw-500">Days</div>
                            <div className="text-20 fw-700">14</div>
                        </div>
                        <div className="d-flex items-center price mobile-none flex-column">
                            <div className="fw-500">Save </div>
                            <div className="text-20 fw-700 ml-10">$0</div>
                        </div>
                        <div className="d-flex items-center price flex-column">
                            <div className="fw-500">
                                Price <del className="d-none">$1700</del>
                            </div>
                        </div>
                    </div>
                    <div className="button-book">
                        <a className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20" href="#depature">
                            Book Now
                            <i className="icon-arrow-top-right ml-10"></i>
                        </a>
                        <button className="button -md -dark-1 col-12 mt-20 border-1" id="modalBtn">
                            Make an Enquiry
                            <i className="icon-arrow-top-right ml-10"></i>
                        </button>
                    </div>
                    <div className="points">
                        <ul>
                            <li>Instant Booking</li>
                            <li>Secure Payments</li>
                            <li>Flexibility</li>
                            <li>No Hidden Costs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
