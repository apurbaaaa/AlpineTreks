import WhyUs from "@/components/homes/features/FeaturesOne";
import Banner from "@/components/homes/heros/Hero6";
import CustomerReviews from "@/components/homes/testimonials/TestimonialOne";
import BestBhutan from "@/components/homes/tours/BestBhutan";
import BestTibet from "@/components/homes/tours/BestTibet";
import TopTreks from "@/components/homes/tours/Top10treks";
import BestSellers from "@/components/homes/tours/TourSlider3";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Welcome from "@/components/homes/banners/Welcome";
import HotSelling from "../../components/layout/components/HotSelling";
import Destination from "@/components/homes/articles/ArticlesOne";
import ActivitiesOffered from "@/components/homes/tourTypes/TourTypes3";
import TrekkingRegions from "@/components/homes/tours/TrekkingRegions";
import { cache } from "react";
import axios from 'axios';

const fetchData = cache(async (url) => {
  const response = await axios.get(url);
  return response.data;
});


export async function generateMetadata() {
  const dataHome = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
  return {
    title: dataHome.seo_title, 
    description: dataHome.seo_description
  }
}

export default async function Page() {
  const dataSettings = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
  const dataHome = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);


  return (
    <>
      <main>
        <Banner data={dataHome} />
        <Welcome />
        <BestSellers
          title={dataHome.best_seller_title}
          desc={dataHome.best_seller_short_description}
          posts={dataHome.best_selling_tours}
        />
        <WhyUs data={dataSettings} />
        <Destination data={dataHome} />
        <ActivitiesOffered data={dataHome} />
        <TrekkingRegions data={dataHome} />
        <TopTreks data={dataHome} />
        <BestBhutan data={dataHome} />
        <BestTibet data={dataHome} />
        <HotSelling data={dataHome} />
        <CustomerReviews />
        <FAQ data={dataSettings.traveller_faq} withFaq={"col-lg-8"} />
        <NewsBlog data={dataHome} />
      </main>
    </>
  );
}
