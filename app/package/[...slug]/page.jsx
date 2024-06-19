"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from "next/navigation";
import NextBreadcrumb from '@/components/common/BreadCrumbs';
import axios from 'axios';
import Loading from '@/components/homes/others/Loading';
import Image from 'next/image';
import TitleHeader from '@/components/package-components/TitleHeader';
import PackageSwiper from '@/components/package-components/PackageSwiper';
import Details from '@/components/package-components/Details';
import TripOverview from '@/components/package-components/TripOverview';
import Itinerary from '@/components/package-components/Itinerary';
import Costs from '@/components/package-components/Costs';

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: apiData } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/package/${slug}`);
                setData(apiData);

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


    return (
        <div>
            <section className=" js-pin-container layout-pb-md">
                <div className="container js-pin-container-inner">
                    <div className="row y-gap-30 justify-between">
                        <div data-anim="slide-up delay-1" className="col-lg-8 is-in-view">
                            <TitleHeader data = {data}/>
                            <PackageSwiper data = {data}/>  
                            <Details data = {data} />
                            <TripOverview data ={data} />
                            <div className="line mt-30 mb-20"></div>
                            <Itinerary data = {data}/>
                            <div className="line mt-30 mb-20"></div>
                            <Costs data = {data} />
                            <div class="line mt-30 mb-20"></div>
                        </div>

                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
