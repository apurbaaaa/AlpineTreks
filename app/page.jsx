import React from "react";
import Firstpage from "./home/page";
import fetchData from "@/utils/fetchData";

export async function generateMetadata() {
  const dataHome = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
  return {
    title: dataHome.seo_title, 
    description: dataHome.seo_description
  }
}

export default function page() {
  return (
    <>
      <Firstpage />
    </>
  );
}