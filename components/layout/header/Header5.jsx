  "use client";

  import { useEffect, useState } from "react";
  import Destinations from "../components/Destinations";
  import About from "../components/About";
  import MobileMenu from "../components/MobileMenu";
  import Image from "next/image";
  import Link from "next/link";
  import { useRouter } from "next/navigation";
  import TravelGuide from "../components/TravelGuide";

  export default function Header5() {
    const router = useRouter();
    const pageNavigate = (pageName) => {
      router.push(pageName);
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [addClass, setAddClass] = useState(false);

    // Add a className to the element when scrolled 50px
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener when the component unmounts
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
                  width="167"
                  height="32"
                  src="https://mountaintrekkingnepal.com/storage/Xk9oUgIpS0YxZBwi7nfodx7zHNPumbqdNahS1603.svg"
                  alt="logo icon"
                  priority
                />
              </a>

            </div>

            <div className="headerMobile__right">
              <button
                onClick={() => pageNavigate("/tour-list-1")}
                className="d-flex"
              >
                <i className="icon-search text-18"></i>
              </button>

              <button
                onClick={() => pageNavigate("/login")}
                className="d-flex ml-20"
              >
                <i className="icon-person text-18"></i>
              </button>
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
