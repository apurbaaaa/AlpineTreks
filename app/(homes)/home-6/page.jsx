
import WhyUs from "@/components/homes/features/FeaturesOne";
import Banner from "@/components/homes/heros/Hero6";
import CustomerReviews from "@/components/homes/testimonials/TestimonialOne";
import BestBhutan from "@/components/homes/tours/BestBhutan";
import BestTibet from "@/components/homes/tours/BestTibet";
import TopTreks from "@/components/homes/tours/Top10treks";
import BestSellers from "@/components/homes/tours/TourSlider3";
import FooterFour from "../../../components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4";
import React from "react";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Welcome from "@/components/homes/banners/Welcome";
import HotSelling from "../../../components/layout/components/HotSelling";
import Destination from "@/components/homes/articles/ArticlesOne";
import ActivitiesOffered from "@/components/homes/tourTypes/TourTypes3";

export const metadata = {
  title: "Home-6 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 /> 
        <Banner />
        <Welcome />
        <BestSellers />
        <WhyUs /> 
        <ActivitiesOffered />
        <CustomerReviews />
        {/* <div className=" bg-light-1"> */}
          <Destination />
        {/* </div> */}
        <TopTreks />
        
        
        <BestBhutan />
        <HotSelling />
        <BestTibet />
        <FAQ />
        <NewsBlog />
        
        <FooterFour />
      </main>
    </>
  );
}
