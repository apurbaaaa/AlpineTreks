"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function TrekkingRegions() {

    const [treks, setTreks] = useState([]); 
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://mountaintrekkingnepal.com/api/home", { cache: 'force-cache' }); 
          setTreks(response?.data?.trekking_regions); 
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error);
        }
      };
  
      fetchData();
    }, []);


  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div data-aos="fade-up" className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Trekking Regions of Nepal</h2>
            <p>Explore the Himalaya and unravel the beauty of trekking in Nepal along these regions.</p>
          </div>

          <div className="col-auto">

          <Link
              href={"/"}
              data-aos="fade-up"
              data-aos-delay="400"
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>

          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider" data-gap="30" data-slider-cols="xl-4 lg-3 md-2 sm-1 base-1" data-nav-prev="js-slider1-prev1" data-nav-next="js-slider1-next1">
            <div className="swiper-wrapper"data-aos="fade-up"
              data-aos-delay="">

    
                <Swiper
                spaceBetween={30}
                className="w-100"
                navigation={{
                  prevEl: ".js-slider1-prev",
                  nextEl: ".js-slider1-next",
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {treks.map((trek, i) => (
                  <SwiperSlide key={i}>
               <Link href={`/region/${trek.slug}`} className="featureCard -type-8 -hover-image-scale">
              <div className="featureCard__image -hover-image-scale__image">
                <Image src={trek.image} width={342.7} height={258.5} alt="image"/>
              </div>

              <div className="featureCard__content">
                <h3 className="text-18 fw-500">{trek.title}</h3>
              </div>
            </Link>
            </SwiperSlide>
            ))}
            </Swiper>

              
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev1">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next1">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
