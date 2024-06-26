import NavInfo from "@/components/common/Contactpages/NavInfo";
import SideInfo from "@/components/common/Contactpages/SideInfo";
import fetchData from "@/utils/fetchData";

import React from "react";

export async function generateMetadata() {
  return {
    title: "Contact", 
    description: "Decription data from api"
  }
}

export default async function page() {
  const resposne = await fetchData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);

  return (
    <>
      <main>
        <NavInfo />
        <SideInfo resposne = {resposne}/>
      </main>
    </>
  );
}
