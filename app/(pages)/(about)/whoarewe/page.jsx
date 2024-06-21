"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import DOMPurify from "dompurify";
import NextBreadcrumb from "@/components/common/BreadCrumbs";
import WhyUs from "@/components/homes/features/FeaturesOne";
import Loading from "@/components/homes/others/Loading";

export default function Page() {
  const [dataSettings, setDataSettings] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSettings = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`);
        setDataSettings(responseSettings.data); 

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about-us`);
        setTitle(response?.data?.title);
        setImage(response?.data?.image);
        setVideo(response?.data?.youtube_url);
        const unpurifiedDesc = response?.data?.content;
        let updatedHtmlString = DOMPurify.sanitize(unpurifiedDesc);
        setContent(updatedHtmlString);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      finally{
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  function openVideo(url) {
    window.open(url, "_blank");
  }

  return (
    <div>
      <section data-aos="fade-up" data-aos-delay="400" className="mt-header pt-30">
        <div className="container">
          <div className="breadcrumbs mb-30 md:mb-15">
          <NextBreadcrumb
                                homeElement={<span>Home</span>}
                                containerClasses="text-14 breadcrumb-text"
                                listClasses=""
                                activeClasses="active"
                                capitalizeLinks={true}
                            />
          </div>
          <h1 className="text-30">{title}</h1>
        </div>
      </section>

      <section className="layout-pt-sm layout-pb-lg about-section">
        <div data-anim-wrap className="container">
          <div className="row y-gap-20 justify-between">
            <div data-aos="fade-up" className="col-lg-6">
              <span dangerouslySetInnerHTML={{ __html: content }}></span>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="col-lg-5">
              <div className="video relative container">
                <div className="video__bg" onClick={() => openVideo('https://www.youtube.com/watch?v=mS7K-GQcGHw')}>
                  <Image
                    src={image}
                    alt="image"
                    width={421}
                    height={301}
                    className="rounded-12"
                  />
                </div>

                <div className="row justify-center md:pb-0">
                  <div className="col-auto">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="29" stroke="#005555" strokeWidth="2" />
                      <g clipPath="url(#clip0_79_4379)">
                        <path
                          d="M39.339 27.6922L27.5265 20.4107C26.6718 19.8846 25.6386 19.8627 24.7625 20.3522C23.8863 20.8416 23.3633 21.7331 23.3633 22.7366V37.2332C23.3633 38.7506 24.5859 39.9918 26.0887 40C26.0928 40 26.0969 40 26.1009 40C26.5705 40 27.0599 39.8528 27.517 39.5739C27.8847 39.3495 28.0009 38.8696 27.7765 38.502C27.5522 38.1342 27.0722 38.0181 26.7046 38.2424C26.4908 38.3728 26.282 38.4402 26.0971 38.4402C25.5301 38.4371 24.923 37.9514 24.923 37.2332V22.7367C24.923 22.3061 25.1474 21.9238 25.5232 21.7139C25.899 21.5039 26.3422 21.5133 26.7083 21.7387L38.5208 29.0202C38.8759 29.2388 39.0791 29.6033 39.0782 30.0202C39.0773 30.4371 38.8727 30.8008 38.5157 31.0187L29.9752 36.2479C29.6078 36.4728 29.4924 36.9529 29.7173 37.3202C29.9422 37.6876 30.4223 37.8031 30.7896 37.5781L39.3291 32.3495C40.1468 31.8507 40.636 30.9812 40.638 30.0234C40.64 29.0656 40.1542 28.1941 39.339 27.6922Z"
                          fill="#005555"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_79_4379">
                          <rect width="20" height="20" fill="#005555" transform="translate(22 20)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {dataSettings && <WhyUs data={dataSettings} />} 
      
    </div>
  );
}
