import NavInfo from "@/components/common/Contactpages/NavInfo";
import SideInfo from "@/components/common/Contactpages/SideInfo";

import React from "react";

export async function generateMetadata() {
  return {
    title: "Contact", 
    description: "Decription data from api"
  }
}

export default function page() {
  return (
    <>
      <main>
        <NavInfo />
        <SideInfo />
      </main>
    </>
  );
}
