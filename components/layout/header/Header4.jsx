"use client";

import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Header4() {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [header, setHeader] = useState("");
  const [error, setError] = useState(null);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/settings");
        // Validate the header_logo before setting
        const headerLogo = response?.data?.header_logo;
        if (headerLogo) {
          setHeader(headerLogo);
        } else {
          throw new Error("Invalid header logo URL");
        }
      } catch (error) {
        setError(error);
        console.error("Failed to fetch header logo:", error);
      }
    };
    fetchHeader();
  }, []);

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
        className={`header -type-3 -page-5 js-header ${addClass ? "-is-sticky" : ""}`}
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
            <Link href="/" className="header__logo">
              {header ? (
                <Image
                  width="167"
                  height="32"
                  src={header}
                  alt="logo icon"
                  priority
                />
              ) : (
                <span>Logo not available</span> // Placeholder for missing image
              )}
            </Link>

            <Menu />
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
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
