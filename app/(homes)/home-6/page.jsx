import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner10 from "@/components/homes/banners/Banner10";
import BrandsThree from "@/components/homes/brands/BrandsThree";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero6 from "@/components/homes/heros/Hero6";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourTypes3 from "@/components/homes/tourTypes/TourTypes3";
import BestBhutan from "@/components/homes/tours/BestBhutan";
import BestTibet from "@/components/homes/tours/BestTibet";
import TopTreks from "@/components/homes/tours/Top10treks";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4";
import React from "react";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Welcome from "@/components/homes/banners/Welcome";

export const metadata = {
  title: "Home-6 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 /> 
        <Hero6 />
        <Welcome />
        <TourSlider3 />
        <FeaturesOne />
        <TourTypes3 />
        <TestimonialOne />
        <div className=" bg-light-1">
          <ArticlesOne />
        </div>
        <TopTreks />
        <FAQ />
        <NewsBlog />
        <BestBhutan />
        <BestTibet />
        {/* <BrandsThree /> */}
        {/* <Banner10 /> */}
        <FooterFour />
      </main>
    </>
  );
}
