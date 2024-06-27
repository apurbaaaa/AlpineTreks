  "use client";

  import { useEffect, useState } from "react";
  import Destinations from "../components/Destinations";
  import About from "../components/About";
  import MobileMenu from "../components/MobileMenu";
  import Image from "next/image";
  import Link from "next/link";
  import TravelGuide from "../components/TravelGuide";

  export default function Header5() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [addClass, setAddClass] = useState(false);

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <>
        <header
          className={`header -type-1 -page-6 js-header  ${
            addClass ? "-is-sticky" : ""
          }`}
        >
          <div className="header__container container">
            <div className="headerMobile__left">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="header__menuBtn js-menu-button"
              >
                <i className="icon-main-menu"></i>
              </button>
            </div>

            <div className="header__logo">
              <a href="/" className="header__logo">
                <Image
                  width="231"
                  height="64"
                  src="https://mountaintrekkingnepal.com/storage/Xk9oUgIpS0YxZBwi7nfodx7zHNPumbqdNahS1603.svg"
                  alt="logo icon"
                  priority
                />
              </a>

            </div>

            

            <div className="header__right">
              {/* For Nepal, tibet, Bhutan, Nepal Trekking, and Spiritual Tours*/}
              <Destinations /> 
              <Destinations />
              <Destinations />
              <Destinations />
              <Destinations />

              {/* for travel guide and about*/}
              <TravelGuide/>
              <About />

              <div className="desktopNav__item">
                <Link href="/blog">
                Blog
                </Link>
              </div>

              <div className="desktopNav__item">
                <Link href="/contact">
                Contact
                </Link>
              </div>

            </div>
          </div>
        </header>
        <MobileMenu
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
      </>
    );
  }
