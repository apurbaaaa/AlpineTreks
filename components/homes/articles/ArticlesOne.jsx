"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Destination() {
  const [data, setData] = useState([]); // Initialize data as an array
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/home"); //  in object
        setData(response?.data?.choose_destinations); 
        setTitle(response?.data?.destination_title);
        setDesc(response?.data?.destination_short_description);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);
  

  if (error) return <div>Error loading the data.</div>; // Check for data length instead of data falsiness

  return (
    <div>
      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-between items-end y-gap-10">
            <div className="col-auto">
              <h2 data-aos="fade-up" data-aos-delay="400" className="text-30 md:text-24">
                {title}
              </h2>
              <p>{desc}</p>
            </div>
            <div className="col-auto">
              <Link href={"/destination"} data-aos="fade-right" data-aos-delay="400" className="buttonArrow d-flex items-center">
                <span>See all</span>
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="" className="row y-gap-30 pt-40 sm:pt-20">
            {data.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <Link href={`/destination/${elm.slug}`} className="featureCard -type-6 -hover-image-scale">
                  <div className="blogCard__image ratio ratio-41:30 -hover-image-scale__image rounded-12">  
                    <Image width={616} height={451} src={elm.image} alt="image" className="img-ratio rounded-12 ratio-41:30" />
                    <div className="blogCard__badge">{elm.count}</div>
                    </div>

                  <div className="blogCard__content mt-30">
                    <div className="blogCard__info text-14">
                      <div className="lh-13">{elm.date}</div>
                      <div className="blogCard__line"></div>
                      <div className="lh-13">By {elm.author}</div>
                    </div>

                    <h3 className="blogCard__title text-18 fw-500 mt-10">
                      {elm.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
