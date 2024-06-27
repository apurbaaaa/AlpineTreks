// app/travel-guide-layout/page.jsx
import React from 'react';
import axios from 'axios';
import Loading from "@/components/homes/others/Loading";
import FAQ from "@/components/layout/components/FAQ";
import NewsBlog from "@/components/homes/articles/NewsBlog";
import Wrapper from "@/components/layout/Wrapper";
import Head from "next/head";

const dmsans = `
  @font-face {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  }
`;

export async function getData() {
  try {
    const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
    const responseHome = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`);
    return {
      dataSettings: responseSettings.data,
      dataHome: responseHome.data,
      favicon: responseSettings.data?.site_favicon,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error };
  }
}

export default async function TravelGuideLayout({ children }) {
  const { dataSettings, dataHome, favicon, error } = await getData();

  if (error) return <div>Error loading data. Please try again later.</div>;

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
