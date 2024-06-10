import React from "react";
import Image from "next/image";
import Link from "next/link";

// Importing images
// import footerSvg from "../public/img/footer.svg";
// import locationIcon from "../public/img/location-dot.svg";
// import envelopeIcon from "../public/img/envelope.svg";
// import phoneIcon from "../public/img/phone.svg";
// import facebookIcon from "../public/img/facebook.svg";
// import instagramIcon from "../public/img/instagram.svg";
// import linkedinIcon from "../public/img/linkedin.svg";
// import twitterIcon from "../public/img/x-twitter.svg";
// import card1 from "../public/img/footer/cards/1.png";
// import card2 from "../public/img/footer/cards/2.png";
// import card3 from "../public/img/footer/cards/3.png";
// import card4 from "../public/img/footer/cards/4.png";
// import card5 from "../public/img/footer/cards/5.png";
// import card6 from "../public/img/footer/cards/6.png";

export default function FooterFour() {
  return (
    <div>
      <footer className="footer -type-1 -light">
        <div className="footer__main">
          <div>
            <Image src="https://mountaintrekkingnepal.com/images/noimage.svg" width={500} height={500} alt="Footer Decoration" />
          </div>
          <div style={{ background: "#21262c" }}>
            <div className="container">
              <div className="footer__content">
                <div className="row y-gap-40 justify-between">
                  <div className="col-lg-4 col-md-6 regular-svg image-inver-color">
                    <h4 className="text-20 fw-500 text-white">Contact</h4>
                    <div className="y-gap-10 mt-20 text-white">
                      <Link className="d-block" href="#">
                        <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Location" />
                        Lazimpat, Kathmamndu, Nepal
                      </Link>
                      <Link className="d-block" href="#">
                        <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Email" />
                        info@alpinetreks.com
                      </Link>
                      <Link className="d-block" href="#">
                        <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Phone" />
                        +977 9876543210
                      </Link>
                    </div>
                    <div className="footerSocials">
                      <div className="footerSocials__title text-white">Follow Us</div>
                      <div className="footerSocials__icons text-white">
                        <Link href="#">
                          <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Facebook" />
                        </Link>
                        <Link href="#">
                          <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Instagram" />
                        </Link>
                        <Link href="#">
                          <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="LinkedIn" />
                        </Link>
                        <Link href="#">
                          <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-auto col-6">
                    <h4 className="text-20 fw-500 text-white">About</h4>
                    <div className="y-gap-10 mt-20">
                      <Link className="d-block fw-500 text-white" href="#">Our team</Link>
                      <Link className="d-block fw-500 text-white" href="#">Why Us</Link>
                      <Link className="d-block fw-500 text-white" href="#">How To make a payment</Link>
                      <Link className="d-block fw-500 text-white" href="#">Term and condition</Link>
                      <Link className="d-block fw-500 text-white" href="#">Privacy Policy</Link>
                    </div>
                  </div>

                  <div className="col-lg-auto col-6">
                    <h4 className="text-20 fw-500 text-white">Quick Links</h4>
                    <div className="y-gap-10 mt-20">
                      <Link className="d-block fw-500 text-white" href="#">Contact</Link>
                      <Link className="d-block fw-500 text-white" href="#">Blog</Link>
                      <Link className="d-block fw-500 text-white" href="#">Spiritual Tours</Link>
                      <Link className="d-block fw-500 text-white" href="#">Nepal Trekking</Link>
                    </div>
                  </div>

                  <div className="col-lg-auto col-6">
                    <h4 className="text-20 fw-500 text-white">Destinations</h4>
                    <div className="y-gap-10 mt-20">
                      <Link className="d-block fw-500 text-white" href="#">Nepal</Link>
                      <Link className="d-block fw-500 text-white" href="#">India</Link>
                      <Link className="d-block fw-500 text-white" href="#">Bhutan</Link>
                      <Link className="d-block fw-500 text-white" href="#">Tibet</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-white-15-top" style={{ background: "#000" }}>
          <div className="container">
            <div className="footer__bottom">
              <div className="row y-gap-5 justify-between items-center">
                <div className="col-auto text-white">
                  <div>© Copyright Alpine treks 2024</div>
                </div>
                <div className="col-auto">
                  <div className="footer__images d-flex items-center x-gap-10"> 
                    <Image src={	"https://mountaintrekkingnepal.com/images/noimage.svg"} width={500} height={500} alt="Card 1" />
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
