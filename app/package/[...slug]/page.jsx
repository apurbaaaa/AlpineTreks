"use client";
import React, { useEffect, useState } from 'react';
import Stars from "@/components/common/Stars";
import Link from 'next/link';
import { useParams } from "next/navigation";
import NextBreadcrumb from '@/components/common/BreadCrumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import Loading from '@/components/homes/others/Loading';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Page = () => {
    const [packageData, setPackageData] = useState({
        title: "",
        total_rating: "",
        rating_count: 0,
        accommodation: "",
        destination: "",
        images: [],
        days: "",
        price: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/package/${slug}`);
                setPackageData({
                    title: data?.title,
                    total_rating: data?.total_rating,
                    rating_count: data?.rating_count,
                    accommodation: data?.accommodation,
                    destination: data?.destination,
                    images: data?.gallery,
                    days: data?.days,
                    price: data.price
                });
            } catch (error) {
                setError(error);
                console.error("Error fetching package data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    if (loading) return <Loading />;
    if (error) return <div className="error-message">Error loading data: {error.message}</div>;

    const { title, total_rating, rating_count, accommodation, destination, images, days, price } = packageData;

    return (
        <div>
            {/* Header component */}
            <div className="menu js-menu">
                <div className="menu__overlay js-menu-button"></div>
                <div className="menu__container">
                    <div className="menu__header">
                        <h4>Main Menu</h4>
                        <button className="js-menu-button">
                            <i className="icon-cross text-10"></i>
                        </button>
                    </div>
                    <div className="menu__content">
                        <ul className="menuNav js-navList">
                            <li className="menuNav__item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="menuNav__item -has-submenu js-has-submenu">
                                <Link href="/nepal">
                                    Nepal
                                    <i className="icon-chevron-right"></i>
                                </Link>
                                <ul className="submenu">
                                    <li className="submenu__item js-nav-list-back">
                                        <Link href="/">Back</Link>
                                    </li>
                                    <li className="submenu__item">
                                        <Link href="/tour-list-1.html">Nepal Trekking</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu__footer">
                        <i className="icon-headphone text-50"></i>
                        <div className="text-20 lh-12 fw-500 mt-20">
                            <div>Speak to our expert at</div>
                            <div className="text-accent-1">1-800-453-6744</div>
                        </div>
                        <div className="d-flex items-center x-gap-10 pt-30">
                            <Link href="#"><i className="icon-facebook"></i></Link>
                            <Link href="#"><i className="icon-twitter"></i></Link>
                            <Link href="#"><i className="icon-instagram"></i></Link>
                            <Link href="#"><i className="icon-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider component */}
            <section data-aos="fade-up" data-aos-delay="400" className="pageHeader -type-3">
                <div className="container">
                    <div className="row justify-between">
                        <div className="col-auto">
                            <div className="text-14 breadcrumb-text">
                                <NextBreadcrumb
                                    homeElement={<span>Home</span>}
                                    containerClasses="text-14 breadcrumb-text"
                                    listClasses=""
                                    activeClasses="active"
                                    capitalizeLinks={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-30">
                        <div className="col-auto text-collapse">
                            <h1 className="text-30 sm:text-30 lh-14">{title}</h1>
                            <div className="row y-gap-20 justify-between pt-20">
                                <div className="col-auto">
                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="d-flex x-gap-5 pr-10">
                                                    <Stars star={total_rating} />
                                                </div>
                                                {total_rating} ({rating_count})
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
                    </div>
                    <div className="row justify-center pt-30">
                        <div className="col-12">
                            <div className={`relative overflow-hidden`} style={{ height: "438px" }}>
                                <Swiper
                                    spaceBetween={10}
                                    className="w-100 overflow-visible"
                                    style={{ maxWidth: "100%" }}
                                    loop={true}
                                    navigation={{
                                        prevEl: ".js-sliderMain-prev",
                                        nextEl: ".js-sliderMain-next",
                                    }}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                >
                                    {images && images.length > 0 ? (
                                        images.map((elm, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="swiper-slide">
                                                    <Image
                                                        width={850}
                                                        height={510}
                                                        src={elm}
                                                        alt="image"
                                                        className="img-cover rounded-12"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    ) : (
                                        <div>No images available</div>
                                    )}
                                </Swiper>
                                <div className={`navAbsolute -type-2`}>
                                    <button
                                        className="navAbsolute__button bg-white js-sliderMain-prev"
                                        aria-label="Previous slide"
                                    >
                                        <i className="icon-arrow-left text-14"></i>
                                    </button>
                                    <button
                                        className="navAbsolute__button bg-white js-sliderMain-next"
                                        aria-label="Next slide"
                                    >
                                        <i className="icon-arrow-right text-14"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* payment */}
            <div className="col-lg-4">
                <div className="d-flex  js-pin-content" style={{position: 'static', top: 'auto'}}>
                    <div className="tourSingleSidebar">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex items-center price mobile-none flex-column">
                                <div className="fw-500">Days</div>
                                <div className="text-20 fw-700">{days}</div>
                            </div>
                        <div className="d-flex items-center price  mobile-none flex-column">
                        <div className="fw-500">Save </div>
                        <div className="text-20 fw-700 ml-10">$0</div>
                        </div>
                        <div className="d-flex items-center price flex-column">
                        <div className="fw-500">Price <del className="d-none">{price}</del> </div>
                        </div>
                        </div>
                    <div className="button-book">
                        <Link className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20" href="#depature">
                            Book Now
                            <i className="icon-arrow-top-right ml-10"></i>
                        </Link>
                        <button className="button -md -dark-1 col-12  mt-20 border-1" id="modalBtn">
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
        </div>
    );
};

export default Page;
