// app/about/page.js

import axios from 'axios';
import React from 'react';
import ClientCompAbout from '@/components/common/ClientCompAbout';

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default async function ServerPage() {
  const dataSettings = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
  const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us`);

  return <ClientCompAbout dataSettings={dataSettings} response={response} />;
}
