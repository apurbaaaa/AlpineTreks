import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4"
import DestInfo from "@/components/pages/destinations/destInfo";
import React from "react";

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <DestInfo />
        <FooterFour />
      </main>
    </>
  );
}
