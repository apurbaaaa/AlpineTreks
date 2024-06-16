"use client"
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4"
import DestInfo from "@/components/pages/destinations/destInfo";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
export default function page() {
  //for SEO

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  const [error, setError] = useState(null);


  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get("https://mountaintrekkingnepal.com/api/destination");
        setSeoTitle(response?.data?.seo_titile);
        setSeoDesc(response?.data?.seo_description);

      }
      catch(error){
        setError(error)
        console.error(error)
      }
    }; fetchData();
  },[])


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
        <Header4 />
        <DestInfo />
        <FooterFour />
      </main>
    </>
  );
}
