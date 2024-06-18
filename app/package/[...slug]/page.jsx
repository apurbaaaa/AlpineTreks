"use client";
import React, { useEffect, useState } from 'react';
import Stars from "@/components/common/Stars";
import Link from 'next/link';
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import NextBreadcrumb from '@/components/common/BreadCrumbs';
import axios from 'axios';
import Loading from '@/components/homes/others/Loading';

const Page = () => {

    const [packageData, setPackageData] = useState({
        title: "",
        total_rating: "",
        rating_count: 0,
        accommodation: "",
        destination: ""
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
                    accomodation: data?.accomodation,
                    destination: data?.destination
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
    if (error) return <div>Error loading data: {error.message}</div>;

    const { title, total_rating, rating_count, accomodation, destination } = packageData;

    return (
        <div>
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
                                                {accomodation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="d-flex x-gap-30 y-gap-10">
                                        <a href="javascript:void(0)" className="d-flex items-center">
                                            <i className="fa-solid fa-share-from-square mr-10"></i>
                                            Share
                                        </a>
                                        <a href="javascript:void(0)" className="d-flex items-center">
                                            <i className="fa-solid fa-download mr-10"></i>
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
