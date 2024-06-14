"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import Stars from "@/components/common/Stars";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function BestTibet() {

    const [tibet, setTibet] = useState([]); // Initialize data as an array
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://mountaintrekkingnepal.com/api/home"); //  in object
          setTibet(response?.data?.best_of_tibet); 
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setError(error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://mountaintrekkingnepal.com/api/home"); //  in object
            setTitle(response?.data?.tibet_title); 
            
          } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
          }
        };
    
        fetchData();
      }, []);
      
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://mountaintrekkingnepal.com/api/home"); //  in object
            setDesc(response?.data?.tibet_short_description); 
            
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
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="400" className="text-30">   
              {title}
            </h2>   
            <p>{desc}</p>
          </div>

          <div className="col-auto">
            <Link
              href={"/destination/tibet"}
              data-aos="fade-up"  
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="swiper-wrapper "
            >
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
                {tibet.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      href={`/package/${elm.slug}`}
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            width={421}
                            height={301}
                            src={elm.featured_image}
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>

                      </div>

                      <div className="tourCard__content px-10 pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                          {elm.destination}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{elm.title}</span>
                        </h3>

                        <div className="tourCard__rating d-flex items-center text-13 mt-5">
                          <div className="d-flex x-gap-5">
                            <Stars star={elm.total_rating} />
                          </div>

                          <span className="text-dark-1 ml-10">
                            Out of {elm.total_reviews} reviews
                          </span>
                        </div>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="icon-clock text-16 mr-5"></i>
                            {elm.days} days
                          </div>

                          <div>
                            From{" "}
                            <span className="text-16 fw-500">${elm.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
