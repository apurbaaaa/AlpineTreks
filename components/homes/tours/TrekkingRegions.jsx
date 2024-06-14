"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TrekkingRegions() {
    const [treks, setTreks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://mountaintrekkingnepal.com/api/home", { cache: 'force-cache' });
                setTreks(response?.data?.trekking_regions || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            }
        };

        fetchData();
    }, []);

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
                            <div className="buttonArrow d-flex items-center">
                                <span>See all</span>
                                <i className="icon-arrow-top-right ml-10"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="relative pt-40 sm:pt-20">
                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: ".js-slider1-prev",
                            nextEl: ".js-slider1-next",
                        }}
                        breakpoints={{
                            500: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                            1600: { slidesPerView: 5 },
                        }}
                    >
                        {treks.map((trek, index) => (
                            <SwiperSlide key={index}>
                                <Link href={`/region/${trek.slug}`} passHref>
                                    <div className="featureCard -type-8">
                                        <div className="featureCard__image">
                                            <Image src={trek.image} width={342.7} height={258.5} alt={trek.title} layout="responsive" />
                                        </div>
                                        <div className="featureCard__content" style={{color: 'white'}}>
                                            <h3 className="text-18 fw-500">{trek.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="navAbsolute">
                        <button className="navAbsolute__button bg-white js-slider1-prev">
                            <i className="icon-arrow-left"></i>
                        </button>
                        <button className="navAbsolute__button bg-white js-slider1-next">
                            <i className="icon-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
