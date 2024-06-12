import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterFour() {
  return (
    <div>
      <footer className="footer -type-1 -light">
  <div className="footer__main">
    <div className="">
      <Image src="/img/footer.svg" width={1906} height={527} alt=""/>
    </div>
    <div style={{ background: '#21262c' }}>
      <div className="container">
        <div className="footer__content">
          <div className="row y-gap-40 justify-between">
            <div className="col-lg-4 col-md-6 regular-svg image-inver-color">
              <h4 className="text-20 fw-500 text-white">Contact</h4>

              <div className="y-gap-10 mt-20 text-white">
                <Link className="d-block" href="#">Lazimpat, Kathmamndu, Nepal</Link>
                <Link className="d-block" href="#">info@alpinetreks.com</Link>
                <Link className="d-block" href="#">+977 9876543210</Link>
              </div>
              <div className="footerSocials">
                <div className="footerSocials__title text-white">
                  Follow Us
                </div>  

                <div className="footerSocials__icons text-white">
                  <Link href="#"><Image src="/img/facebook.svg" width = {40} height = {40} alt=""/> </Link>
                  <Link href="#"><Image src="/img/instagram.svg" width = {40} height = {40} alt=""/> </Link>
                  <Link href="#"><Image src="/img/linkedin.svg" width = {40} height = {40} alt=""/> </Link>
                  <Link href="#"><Image src="/img/x-twitter.svg" width = {40} height = {40} alt=""/> </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-auto col-6">
              <h4 className="text-20 fw-500 text-white">About</h4>

              <div className="y-gap-10 mt-20">

                <Link className="d-block fw-500 text-white" href="#">
                  Our team
                </Link>

                <Link className="d-block fw-500 text-white" href="#">
                  Why Us
                </Link>

                <Link className="d-block fw-500 text-white" href="#">
                 How To make a payment
               </Link>

               <Link className="d-block fw-500 text-white" href="#">
                Term and condition
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Privacy Policy
              </Link>

            </div>
          </div>

          <div className="col-lg-auto col-6">
            <h4 className="text-20 fw-500 text-white">Quick Links</h4>

            <div className="y-gap-10 mt-20">

              <Link className="d-block fw-500 text-white" href="#">
                Contact
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Blog
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
                Spiritual Tours
              </Link>

              <Link className="d-block fw-500 text-white" href="#">
               Nepal Trekking

             </Link>

           </div>
         </div>
         <div className="col-lg-auto col-6">
          <h4 className="text-20 fw-500 text-white">Destinations</h4>

          <div className="y-gap-10 mt-20">

            <Link className="d-block fw-500 text-white" href="#">
              Nepal
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
              India
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
              Bhutan
            </Link>

            <Link className="d-block fw-500 text-white" href="#">
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
