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
          const response = await axios.get("https://mountaintrekkingnepal.com/api/settings", { cache: 'force-cache' });
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
          const response = await axios.get("https://mountaintrekkingnepal.com/api/settings", { cache: 'force-cache' });
          setChooseDesc(response?.data?.choose_us_description);
        } catch (error){
          setError(error)
          console.error(error);
        }
        
      };
      fetchChooseDesc();
    }, [])


  return (

    <section className="layout-pt-lg layout-pb-lg bg-accent-1-05">
      <div data-anim-wrap className="container">
         <div className="row justify-center text-center">
          <div className="col-lg-8 col-12">
            <h2 className="text-30 md:text-24">Why choose Us</h2>
            <p>{chooseDesc}</p>
          </div>
        </div> 

        <div data-anim-child="delay-2" className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280 is-in-view">
        {choose.map((elm, i)=>(
          <div className="col-lg-3 col-sm-6 d-flex">
              <div key={i} className="featureIcon -type-1 text-center px-20 py-60 rounded-12 hover-shadow-1 bg-white mb-20">
                <div className="featureIcon__icon">
                  <img src={elm.image} alt="icon"/>
                </div>
                <h3 className="featureIcon__title text-20 fw-700 mt-30">{elm.title}</h3>
                <p className="featureIcon__text mt-10">{elm.short_text}</p>
              </div>
          </div>  
        ))}
      </div>
    </div>
    </section>
  );
}
