"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import axios from 'axios';
import Loading from '@/components/homes/others/Loading';
import TitleHeader from '@/components/package-components/TitleHeader';
import PackageSwiper from '@/components/package-components/PackageSwiper';
import Details from '@/components/package-components/Details';
import TripOverview from '@/components/package-components/TripOverview';
import Itinerary from '@/components/package-components/Itinerary';
import Costs from '@/components/package-components/Costs';
import Departure from '@/components/package-components/Departure';
import FAQ from '@/components/layout/components/FAQ';
import BestSellers from '@/components/homes/tours/TourSlider3';
import BookCard from '@/components/package-components/BookCard';
import BottomNav from '@/components/package-components/BottomNav';
import NextBreadcrumb from '@/components/common/BreadCrumbs';
import fetchData from '@/utils/fetchData';

export async function generateMetadata() {
    const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/package/${slug}`);
    return {
      title: response.seo_title, 
      description: response.seo_description
    }
}


export default async function Page({ params }){

    const { slug } = params
    const data = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/package/${slug}`);

    return (
        <div>
            <BottomNav />
            <div className='container is-in-view' data-anim='fade'>
                <div className='row justify-between py-30 mt-80'>
                    <div className='col-auto'>
                        <div className='text-14 breadcrumb-text'>
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
            </div>
            
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
                            <div className="line mt-30 mb-20"></div>
                            <Departure if data = {data}/>
                            <div className="line mt-30 mb-20"></div>
                            <FAQ data = {data.tour_faq}/>
                        </div>
                        <BookCard data = {data} />
                    </div>
                </div>
            </section>
            <div id='bestSellers'>
                <BestSellers title = "You might also like..." desc = "" posts = {data.related_posts} />
            </div>
            
        </div>
    );
}
    


