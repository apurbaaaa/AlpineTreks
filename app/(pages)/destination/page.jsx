import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4"
import DestInfo from "@/components/pages/destinations/destInfo";
import React from "react";

export const metadata = {
  title: "Destinations || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

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
