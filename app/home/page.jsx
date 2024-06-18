"use client"
import WhyUs from "@/components/homes/features/FeaturesOne";
import Banner from "@/components/homes/heros/Hero6";
import CustomerReviews from "@/components/homes/testimonials/TestimonialOne";
import BestBhutan from "@/components/homes/tours/BestBhutan";
import BestTibet from "@/components/homes/tours/BestTibet";
import TopTreks from "@/components/homes/tours/Top10treks";
import BestSellers from "@/components/homes/tours/TourSlider3";
import React, { useEffect, useState } from "react";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Welcome from "@/components/homes/banners/Welcome";
import HotSelling from "../../components/layout/components/HotSelling";
import Destination from "@/components/homes/articles/ArticlesOne";
import ActivitiesOffered from "@/components/homes/tourTypes/TourTypes3";
import TrekkingRegions from "@/components/homes/tours/TrekkingRegions";
import axios from "axios";
import Head from "next/head";
import Loading from "@/components/homes/others/Loading";

export default function page() {
  
    const [dataSettings, setDataSettings] = useState(null);
    const [dataHome, setDataHome] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [seoTitle, setSeoTitle] = useState(""); // for SEO
    const [seoDesc, setSeoDesc] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`); 
          const settings = await responseSettings.data;
          setDataSettings(settings);

          const responseHome = await axios.get (`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
          const home = await responseHome.data;
          setDataHome(home);

          setSeoTitle(responseHome?.data?.seo_title);
          setSeoDesc(responseHome?.data?.seo_description);

        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div><Loading/></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  return (
    <>
      <Head>
      <title>{seoTitle}</title>
        <meta
          name="description"
          content= {seoDesc}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner data = {dataHome}/>
        <Welcome />
        <BestSellers data = {dataHome} />
        <WhyUs data = {dataSettings} /> 
        <Destination data = {dataHome}/>
        <ActivitiesOffered data = {dataHome}/>
        <TrekkingRegions data = {dataHome}/>
        <TopTreks data = {dataHome}/>
        <BestBhutan data = {dataHome}/>
        <BestTibet data = {dataHome}/>
        <HotSelling data = {dataHome}/>
        <CustomerReviews />
        <FAQ data = {dataSettings}/>
        <NewsBlog data = {dataHome}/>
      </main>
    </>
  );
}
