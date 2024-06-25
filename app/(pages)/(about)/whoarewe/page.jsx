// app/about/page.js
import React from 'react';
import ClientCompAbout from '@/components/common/ClientCompAbout';
import fetchData from '@/utils/fetchData';

export async function generateMetadata() {
  const data = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us`);
  return {
    title: data.seo_title, 
    description: data.seo_description
  }
}

export default async function ServerPage() {
  const dataSettings = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
  const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us`);

  return <ClientCompAbout dataSettings={dataSettings} response={response} />;
}
