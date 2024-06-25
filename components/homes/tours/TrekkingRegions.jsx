"use client";

import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function TrekkingRegions({data}) {
    return (
        <section className="layout-pt-lg layout-pb-lg">
            <div className="container">
                <div className="row y-gap-10 justify-between items-end">
                    <div className="col-auto">
                        <h2>Trekking Regions of Nepal</h2>
                        <p>Explore the Himalaya and unravel the beauty of trekking in Nepal along these regions.</p>
                    </div>
                    <div className="col-auto">
                        <Link href={"/"} passHref>
                            <div className="buttonArrow d-flex items-center" aria-label="See all trekking regions">
                                <span>See all</span>
                                <i className="icon-arrow-top-right ml-10"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="relative pt-40 sm:pt-20">
                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".js-slider1-prev-trekking",
                            nextEl: ".js-slider1-next-trekking",
                        }}
                        breakpoints={{
                            500: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {data.trekking_regions && data.trekking_regions.length > 0 ? (
                        data.trekking_regions.map((trek, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/region/${trek.slug}`} passHref>
                                    <div className="featureCard -type-8" aria-label={`Trekking region: ${trek.title}`}>
                                        <div className="featureCard__image -hover-image-scale__image">
                                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                            <Image
                                                src={trek.image}
                                                alt={trek.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                 // You can adjust this to 'contain' or other values based on your needs
                                                 sizes="(max-width: 1px) 100vw, 
                                                        (max-width: 1px) 50vw, 
                                                        33vw"
                                                        //sizes to be altered
                                            />
                                        </div>

                                        </div>
                                        <div className="featureCard__content">
                                            <h3 className="text-18 fw-500">{trek.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))) : (
                            <p>No offers available.</p>
                        )}
                    </Swiper>

                    <div className="navAbsolute">
                        <button className="navAbsolute__button bg-white js-slider1-prev-trekking" aria-label="Previous slide">
                            <i className="icon-arrow-left"></i>
                        </button>
                        <button className="navAbsolute__button bg-white js-slider1-next-trekking" aria-label="Next slide">
                            <i className="icon-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

TrekkingRegions.propTypes = {
    data: PropTypes.shape({
        trekking_regions: PropTypes.arrayOf(
            PropTypes.shape({
                slug: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};
