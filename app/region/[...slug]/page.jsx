import React from "react";
import fetchData from "@/utils/fetchData";
import RegionContent from "@/components/common/RegionContent";


//the given commented code is to compile region pages before clicking on them individually

// export async function generateStaticParams() {
//   const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/region`)
//   return response.data.regions.map((slug) => 
//     slug
//   )
// }

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/region/${slug}`);
  return {
    title: data.seo_title, 
    description: data.seo_description
  }
} 
export default async function Page({params}){
  const { slug } = params;
  const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/region/${slug}`);

  return (
    <RegionContent
      data={response}
    />
  );
};


