// app/layout.js

// Imports
import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import Header4 from "@/components/layout/header/Header4";
import Header5 from "@/components/layout/header/Header5";
import FooterFour from "@/components/layout/footers/FooterFour";
import "../public/css/style.css";
import { DM_Sans } from "next/font/google";
import axios from "axios";
import { Suspense } from "react";
import Loading from "@/components/homes/others/Loading";
// Fonts
const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// RootLayout Component
export default async function RootLayout({ children }) {
  // Fetch data server-side
  let dataSettings = null;
  let favicon = "";
  let error = null;
  let loading = true;

  try {
    const responseSettings = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`
    );
    dataSettings = responseSettings?.data || null;
    favicon = dataSettings?.site_favicon || "";
  } catch (err) {
    error = err.message || "An error occurred";
    console.error(err);
  }finally{
    loading = false;
  }

  if (loading){
    return(
      <div><Loading /></div>
    )
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon} sizes="any" />
      </head>
      <body className={dmsans.className}>
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        )}
        <Header5 />
        <Wrapper>{children}</Wrapper>
        <ScrollToTop />
        <ScrollTopBehaviour />
        <Suspense fallback={<div>Loading...</div>}>
          <FooterFour data={dataSettings} />
        </Suspense>
      </body>
    </html>
  );
}
