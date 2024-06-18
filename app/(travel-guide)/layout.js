"use client"
import "../../public/css/style.css"
import { DM_Sans } from "next/font/google";
import Wrapper from "@/components/layout/Wrapper";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "@/components/homes/others/Loading";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import TravelGuideTable from "@/components/TravelGuideComponents/TravelGuide";


const dmsans = DM_Sans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
  });

  if (typeof window !== "undefined") {
    import("bootstrap");
  }

  export default function TravelGuideLayout({ children }) {

    const [dataSettings, setDataSettings] = useState(null);
    const [dataHome, setDataHome] = useState(null);
    const [loading, setLoading] = useState(true)
    const [favicon,setFavicon] = useState('');
    const [error,setError] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
        setDataSettings(responseSettings?.data)
        setFavicon(responseSettings?.data?.site_favicon);

        const responseHome = await axios.get (`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
          const home = await responseHome.data;
          setDataHome(home);
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
    return <div><Loading/></div>;
  }
  
  
    return (
      <html lang="en">
        <head><link rel="icon" href={favicon} sizes="any" />
        </head>
        <body className={dmsans.className}>
          <Header4 />
          <Wrapper>{children}</Wrapper>
          <FAQ data = {dataSettings}/>
          <NewsBlog data = {dataHome} />  
          <FooterFour data = {dataSettings} />
        </body>
      </html>
    );
  }