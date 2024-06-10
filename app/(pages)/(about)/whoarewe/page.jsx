import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterFour from "@/components/layout/footers/FooterFour";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Header4 from "@/components/layout/header/Header4";
export default function page(){

    return(
        <div>
            <Header4 />
            <section data-aos="fade-up" className="mt-header pt-30">
                <div className="container">
        <div className="breadcrumbs mb-30 md:mb-15">
          <span className="breadcrumbs__item">
            <Link href="/">Home </Link>
          </span>
          <span></span>
          <span className="breadcrumbs__item">
            <Link href="/whoarewe">About </Link>
          </span>
          <span></span> 
          <span className="breadcrumbs__item">
            <Link href="/whoarewe">Who are We </Link>
          </span>
        </div>

        <h1 className="text-30">Who We Are</h1>
                </div>
            </section>

            <section className="layout-pt-sm layout-pb-lg  about-section">
                <div data-anim-wrap className="container">
                    <div className="row y-gap-20 justify-between">
                    <div data-aos="fade-up" className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" className="col-lg-5">
                        <div className="video relative container">
                    <div className="video__bg">
                    <Image src="https://mountaintrekkingnepal.com/storage/EwHNVu2lfljuTYSx3sx3dbWGcZqOkLKceUYijHjR.jpg" alt="image" width={421}
                            height={301} className="rounded-12" />
                    </div>

                    <div className="row justify-center md:pb-0">
                    <div className="col-auto">
                    <Link href="https://www.youtube.com/watch?v=ANYfx4-jyqY" className="d-block js-gallery" data-gallery="gallery1" aria-label="Watch our video on YouTube">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="29" stroke="#005555" strokeWidth="2" />
                            <g clipPath="url(#clip0_79_4379)">
                            <path d="M39.339 27.6922L27.5265 20.4107C26.6718 19.8846 25.6386 19.8627 24.7625 20.3522C23.8863 20.8416 23.3633 21.7331 23.3633 22.7366V37.2332C23.3633 38.7506 24.5859 39.9918 26.0887 40C26.0928 40 26.0969 40 26.1009 40C26.5705 40 27.0599 39.8528 27.517 39.5739C27.8847 39.3495 28.0009 38.8696 27.7765 38.502C27.5522 38.1342 27.0722 38.0181 26.7046 38.2424C26.4908 38.3728 26.282 38.4402 26.0971 38.4402C25.5301 38.4371 24.923 37.9514 24.923 37.2332V22.7367C24.923 22.3061 25.1474 21.9238 25.5232 21.7139C25.899 21.5039 26.3422 21.5133 26.7083 21.7387L38.5208 29.0202C38.8759 29.2388 39.0791 29.6033 39.0782 30.0202C39.0773 30.4371 38.8727 30.8008 38.5157 31.0187L29.9752 36.2479C29.6078 36.4728 29.4924 36.9529 29.7173 37.3202C29.9422 37.6876 30.4223 37.8031 30.7896 37.5781L39.3291 32.3495C40.1468 31.8507 40.636 30.9812 40.638 30.0234C40.64 29.0656 40.1542 28.1941 39.339 27.6922Z" fill="#005555" />
                            </g>
                            <defs>
                            <clipPath id="clip0_79_4379">
                                <rect width="20" height="20" fill="#005555" transform="translate(22 20)" />
                            </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    </div>
                    </div>
                </div>
                    </div>
                    </div>
                </div>
            </section>
            <FeaturesOne/>
            <FooterFour/>
        </div>
    );
}