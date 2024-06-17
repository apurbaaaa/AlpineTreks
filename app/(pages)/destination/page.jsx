"use client"
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4"
import DestInfo from "@/components/pages/destinations/destInfo";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";



export default function page() {
  //for SEO


  const [seoTitle, setSeoTitle] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  const [dataDest, setDataDest] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataSettings, setDataSettings] = useState(null)


  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destination`);
        setSeoTitle(response?.data?.seo_titile);
        setSeoDesc(response?.data?.seo_description);
        setDataDest(response?.data)
        const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
        setDataSettings(responseSettings?.data)
      }
      catch(error){
        setError(error)
        console.error(error)
      } finally {
        setLoading(false);
      }
    }; fetchData();
  },[])

  if (loading) {
    return <div>Loading...</div>;
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

        <DestInfo data = {dataDest}/>
      </main>
    </>
  );
}
