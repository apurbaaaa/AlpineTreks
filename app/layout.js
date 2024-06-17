'use client'
import ScrollToTop from "@/components/common/ScrollToTop";
import "../public/css/style.css";

import { DM_Sans } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  import("bootstrap");
}





export default function RootLayout({ children }) {

  const [dataSettings, setDataSettings] = useState(true)
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  const fetchData = async () => {
    try{
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

  const [favicon,setFavicon] = useState('');
  const [error,setError] = useState(null);

  useEffect(()=>{
      const fetchData = async ()=>{
        try{
          const response = await axios.get('https://mountaintrekkingnepal.com/api/settings');
          setFavicon(response?.data?.site_favicon);

        }catch(err){
          setError(err);
          console.log(err)
        }
      };
      fetchData();
  },[])

  return (
    <html lang="en">
      <head><link rel="icon" href={favicon} sizes="any" />
      </head>
      <body className={dmsans.className}>
        <Header4 />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
        <FooterFour data = {dataSettings} />
      </body>
    </html>
  );
}
