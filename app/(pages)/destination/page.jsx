import DestInfo from "@/components/pages/destinations/destInfo";
import React from "react";
import fetchData from "@/utils/fetchData";



export async function generateMetadata() {
  return {
    title: "Destinations", 
    description: "No SEO content in api/destination yet",
  }
}

export default async function page() {  
  const response = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destination`);

  return (
    <>
      <main>
        <DestInfo data = {response}/>
      </main>
    </>
  );
}
