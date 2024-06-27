"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterFour({data}) {
  return (
    <div>
      <footer className="footer -type-1 -light" >
  <div className="footer__main" style={{backgroundColor:"#f5f5f5"}}>
    <div className="" >
      <Image src="/img/footer.svg" width={1906} height={527} alt=""/>
    </div>
    <div style={{ background: '#21262c' }}>
      <div className="container">
        <div className="footer__content">
          <div className="row y-gap-40 justify-between">
            <div className="col-lg-4 col-md-6 regular-svg image-inver-color">
              <h4 className="text-20 fw-500 text-white">Contact</h4>

              <div className="y-gap-10 mt-20 text-white">
                <Link className="d-block" href="/">{data.address}</Link>
                <Link className="d-block" href="/">{data.email_address} </Link>
                <Link className="d-block" href="/">{data.phone}</Link>
              </div>
              <div className="footerSocials">
                <div className="footerSocials__title text-white">
                  Follow Us
                </div>  

                <div className="footerSocials__icons text-white" id="footer_svg">
                  <Link href="www.facebook.com"><Image  src="/img/facebook.svg" width = {30} height = {25} alt="facebook"/> </Link>
                  <Link href="www.instagram.com"><Image src="/img/instagram.svg" width = {30} height = {25} alt="instagram"/> </Link>
                  <Link href="www.linkedin.com"><Image src="/img/linkedin.svg" width = {30} height = {25} alt="linkedin"/> </Link>
                  <Link href="www.twitter.com"><Image src="/img/x-twitter.svg" width = {30} height = {25} alt="twitter"/> </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-auto col-6">
              <h4 className="text-20 fw-500 text-white">About</h4>

              <div className="y-gap-10 mt-20">

                <Link className="d-block fw-500 text-white" href="/team">
                  Our team
                </Link>

                <Link className="d-block fw-500 text-white" href="/whyus">
                  Why Us
                </Link>

                <Link className="d-block fw-500 text-white" href="/team">
                 How To make a payment
               </Link>

               <Link className="d-block fw-500 text-white" href="/team">
                Term and condition
              </Link>

              <Link className="d-block fw-500 text-white" href="/team">
                Privacy Policy
              </Link>

            </div>
          </div>

          <div className="col-lg-auto col-6">
            <h4 className="text-20 fw-500 text-white">Quick Links</h4>

            <div className="y-gap-10 mt-20">

              <Link className="d-block fw-500 text-white" href="/contact">
                Contact
              </Link>

              <Link className="d-block fw-500 text-white" href="/blog">
                Blog
              </Link>

              <Link className="d-block fw-500 text-white" href="/destination/spiritual-tours">
                Spiritual Tours
              </Link>

              <Link className="d-block fw-500 text-white" href="/activity/nepal-trekking">
               Nepal Trekking

             </Link>

           </div>
         </div>
         <div className="col-lg-auto col-6">
          <h4 className="text-20 fw-500 text-white">Destinations</h4>

          <div className="y-gap-10 mt-20">

            <Link className="d-block fw-500 text-white" href="/destination/nepal">
              Nepal
            </Link>

            <Link className="d-block fw-500 text-white" href="/destination/india">
              India
            </Link>

            <Link className="d-block fw-500 text-white" href="/destination/bhutan">
              Bhutan
            </Link>

            <Link className="d-block fw-500 text-white" href="/destination/tibet">
             Tibet

           </Link>

         </div>
       </div>
     </div>
   </div>
  </div>
  </div>
  </div>


  <div className="border-white-15-top" style={{background: '#000'}}>
  <div className="container">
    <div className="footer__bottom">
      <div className="row y-gap-5 justify-between items-center">
        <div className="col-auto text-white">
          <div>© Copyright Alpine treks 2024</div>
        </div>

        <div className="col-auto">
          <div className="footer__images d-flex items-center x-gap-10">
            <Image src="/img/footer/cards/1.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/2.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/3.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/4.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/5.png" width = {48} height = {24} alt="image"/>
            <Image src="/img/footer/cards/6.png" width = {48} height = {24} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </footer>
    </div>
  );
}
