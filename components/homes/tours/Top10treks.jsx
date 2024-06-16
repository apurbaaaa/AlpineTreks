"use client"

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Stars from "@/components/common/Stars";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import 'swiper/css';
import 'swiper/css/navigation';

export default function TopTreks() {
  const [treks, setTreks] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/home");
        setTitle(response?.data?.top_treks_title);
        setDesc(response?.data?.top_treks_short_description);
        setTreks(response?.data?.top_treks);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              {title}
            </h2>
            <p>{desc}</p>
          </div>

          <div className="col-auto">
            <Link href={"/activity/nepal-trekking"} className="buttonArrow d-flex items-center ">
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <Swiper
            spaceBetween={30}
            navigation={{
              prevEl: ".js-slider2-prev-treks",
              nextEl: ".js-slider2-next-treks",
            }}
            modules={[Navigation]}
            breakpoints={{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {treks.map((trek, i) => (
              <SwiperSlide key={i}>
                <Link href={`/package/${trek.slug}`} className="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow">
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20 -hover-image-scale__image">
                      <Image src={trek.featured_image} alt={trek.title} width={500} height={300} className="img-ratio rounded-12"/>
                    </div>
                    <div className="tourCard__content px-10 pt-10">
                      <div className="tourCard__location d-flex items-center text-13 text-light-2">
                        <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        {trek.destination}
                      </div>
                      <h3 className="tourCard__title text-16 fw-500 mt-5">
                        <span>{trek.title}</span>
                      </h3>

                      <div className="tourCard__rating d-flex items-center text-13 mt-5">
                        <div className="d-flex x-gap-5">
                          <Stars star={trek.total_rating} />
                        </div>
                        <span className="text-dark-1 ml-10">
                          Out of {trek.total_reviews} reviews
                        </span>
                      </div>

                      <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div className="d-flex items-center">
                          <i className="icon-clock text-16 mr-5"></i>
                          {trek.days} days
                        </div>
                        <div>
                          From{" "}
                          <span className="text-16 fw-500">${trek.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider2-prev-treks">
              <i className="icon-arrow-left text-14"></i>
            </button>
            <button className="navAbsolute__button bg-white js-slider2-next-treks">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
