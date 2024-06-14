"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Destination() {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mountaintrekkingnepal.com/api/home");
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
  

  if (error) return <div>Error loading the data.</div>; 

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
              <div key={i} className="col-lg-4 col-md-6 is-in-view " data-aos="fade-up" data-aos-delay="400">
                <Link href={`/destination/${elm.slug}`} className="featureCard-type-6 -hover-image-scale">
                  
                <div className="blogCard__image ratio ratio-16:9 -hover-image-scale__image rounded-12">
                <Image src={elm.image} width={750} height={420} alt={elm.title} className="img-ratio rounded-12" />
                </div>
                <div className="featuredCard__content"  id="feature">
                <h3 className="text-white" id="act_title">{elm.title}</h3>
                <p className="text-white lh-16">{elm.count}+ Activities</p>
                </div>


                  <div className="blogCard__content mt-30">
                    <div className="blogCard__info text-14">
                      <div className="lh-13">{elm.date}</div>
                      <div className="blogCard__line"></div>
                    </div>
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




