import NavInfo from "@/components/common/Contactpages/NavInfo";
import SideInfo from "@/components/common/Contactpages/SideInfo";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header4 from "@/components/layout/header/Header4";

import React from "react";

export const metadata = {
  title: "Contact || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

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
