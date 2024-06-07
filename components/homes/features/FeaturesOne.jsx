"use client"
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FeaturesOne() {
  const [choose, setChoose] = useState([]);
  const [error, setError] = useState(null);
  const [chooseDesc, setChooseDesc] = useState("");

  useEffect(()=> {
    const fetchChoose = async () => {
      try{
        const response = await axios.get("https://mountaintrekkingnepal.com/api/settings");
        setChoose(response?.data?.choose_us);
      } catch (error){
        setError(error)
        console.error(error);
      }
      
    };
    fetchChoose();
  }, [])
  useEffect(()=> {
    const fetchChooseDesc = async () => {
      try{
        const response = await axios.get("https://mountaintrekkingnepal.com/api/settings");
        setChooseDesc(response?.data?.choose_us_description);
      } catch (error){
        setError(error)
        console.error(error);
      }
      
    };
    fetchChooseDesc();
  }, [])


  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24">
              Why Choose Us
            </h2>
            <p>{chooseDesc}</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280"
        >
          {choose.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon">
                  <Image width={60} height={60} src={elm.image} alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  {elm.title}
                </h3>
                <p className="featureIcon__text mt-10">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
