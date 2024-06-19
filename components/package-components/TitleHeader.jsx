import React from "react";
import PropTypes from "prop-types";
import Stars from "../common/Stars";
import Link from "next/link"; // Assuming you are using Next.js for routing

function TitleHeader({ data }) {
    // If data is undefined, provide default empty object
    const { title, total_rating, rating_count, destination, accommodation } = data || {};

    return (
        <div className="title-header">
            {title && <h1 className="text-30 sm:text-30 lh-14">{title}</h1>}
            <div className="row y-gap-20 justify-between pt-20">
                <div className="col-auto">
                    <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                    {total_rating !== undefined && <Stars star={total_rating} />}
                                </div>
                                {total_rating !== undefined && rating_count !== undefined && (
                                    <span>{total_rating} ({rating_count})</span>
                                )}
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <i className="icon-pin text-16 mr-5"></i>
                                {destination}
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <i className="icon-reservation text-16 mr-5"></i>
                                {accommodation}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="d-flex x-gap-30 y-gap-10">
                        <Link href="#" onClick={(e) => e.preventDefault()} className="d-flex items-center">
                            <i className="fa-solid fa-share-from-square mr-10"></i>
                            Share
                        </Link>
                        <Link href="#" onClick={(e) => e.preventDefault()} className="d-flex items-center">
                            <i className="fa-solid fa-download mr-10"></i>
                            Download
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

TitleHeader.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        total_rating: PropTypes.string,
        rating_count: PropTypes.number,
        destination: PropTypes.string,
        accommodation: PropTypes.string,
    }),
};



export default TitleHeader;
