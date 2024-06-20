"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/homes/others/Loading";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import Wrapper from "@/components/layout/Wrapper";
import Head from "next/head";

// Importing CSS globally
import "../../public/css/style.css";

// Font loading setup (consider moving to globals.css or _app.js)
const dmsans = `
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  }
`;

export default function TravelGuideLayout({ children }) {
  const [dataSettings, setDataSettings] = useState(null);
  const [dataHome, setDataHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favicon, setFavicon] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
        setDataSettings(responseSettings.data);
        setFavicon(responseSettings.data?.site_favicon);

        const responseHome = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
        setDataHome(responseHome.data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <link rel="icon" href={favicon} sizes="any" />
        <style>{dmsans}</style>
      </Head>
      <div className="body-wrapper">
        <Wrapper>{children}</Wrapper>
        <FAQ data={dataSettings.traveller_faq} />
        <NewsBlog data={dataHome} />
      </div>
    </>
  );
}
