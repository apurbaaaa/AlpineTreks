import SideInfo from "@/components/common/Contactpages/SideInfo";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";

export const metadata = {
  title: "Contact || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        {/* <Map /> */}
        {/* <Locations /> */}
        {/* <ContactForm /> */}
        <SideInfo />

        <FooterFour />
      </main>
    </>
  );
}
